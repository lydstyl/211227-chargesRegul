/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ElectricityData, WaterData, Data } from '../data/data' // interfaces

import { frToDate, getDays } from './utils/days'
import { sumArray } from './utils/sumArray'

import { getGarbageCharge, getGarbageChargeDetail } from './garbage'
import { totalElectricityPerMonth } from './electricity'
import {
    getWaterCharge,
    getCostPerCubic,
    getAllMonthlyWaterConsumptions,
} from './water'

const hasGarbage = (garbageCharge: number, rate: number) => ({
    garbage: () => getGarbageCharge(garbageCharge, rate),
    garbageDetail: () => getGarbageChargeDetail(garbageCharge, rate),
})

const hasElectricity = (data: ElectricityData) => {
    const { from, to, amounts, rate } = data
    const days = getDays(frToDate(from), frToDate(to))
    const totalAmount = sumArray(amounts)
    const electricityPerMonth = totalElectricityPerMonth(totalAmount, days)

    const electricity = () => {
        return electricityPerMonth * rate
    }

    return {
        electricity,
        electricityDetail: () => `ÉLECTRICITÉ
Depuis le ${from} et jusqu'au ${to}, les montant des factures sont :${amounts.map(
            (a) => ` ${a.toFixed(2)} €`
        )}
Cela fait un total de ${totalAmount.toFixed(2)} € dépensé en ${getDays(
            frToDate(from),
            frToDate(to)
        )} jours.
Le coup par mois est donc de ${totalElectricityPerMonth(
            totalAmount,
            days
        ).toFixed(2)} € pour l'ensemble des occupants.
Vos charges d'électricité sont donc de 
= coup par mois x votre taux d'occupation 
= ${electricityPerMonth.toFixed(2)} x ${rate.toFixed(2)} 
= ${electricity().toFixed(2)} €`,
    }
}

const hasWater = (data: WaterData) => {
    const water = () => {
        return getWaterCharge(data)
    }
    const waterDetail = () =>
        `EAU
Les dernières factures d'eau indiquent :${data.waterInvoices.map(
            (invoice) =>
                ` ${invoice.price.toFixed(
                    2
                )} € pour ${invoice.consumption.toFixed(2)} m3`
        )}
Nous pouvons donc en déduire le cout d'1m3 
= somme des couts en € / somme des consomations en m3
= ${getCostPerCubic(data.waterInvoices).toFixed(2)}
En utilisant vos relevés, nous pouvons en déduire votre consomation mensuelle en m3 
= ${getAllMonthlyWaterConsumptions(data.meterReadings).toFixed(2)} m3
Vous charges d'eau mensuelle = votre consomation mensuelle x cout d'1m3
= ${getWaterCharge(data).toFixed(2)} €`

    return {
        water,
        waterDetail,
    }
}

export const charges = (data: Data) => ({
    ...hasGarbage(data.garbage.garbageCharge, data.garbage.garbageRate),
    ...hasElectricity(data.electricity),
    ...hasWater(data.water),
})

// charges regularization
export const getTotalCharges = (
    garbage: number,
    electricity: number,
    water: number
): number => garbage + electricity + water

export const getMonthlyDifference = (real: number, current: number) =>
    real - current

export const getMonthOfLiving = (date1: string, date2: string) => {
    const d1 = frToDate(date1)
    const d2 = frToDate(date2)
    const days = getDays(d1, d2)

    if (days >= 365) {
        return 12
    }

    const months = days / (365 / 12)

    return months
}

export const getDebt = (difference: number, monthsOfLiving: number) =>
    difference * monthsOfLiving

export const getNewCharges = (real: number, current: number): number => {
    const difference = Math.abs(getMonthlyDifference(real, current))

    if (difference < 3) {
        return current
    }

    return Math.round(real)
}
