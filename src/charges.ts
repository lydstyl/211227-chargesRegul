import { ElectricityData, WaterData, Data } from '../data/data' // interfaces

import { frToDate, getDays } from './utils/days'
import { sumArray } from './utils/sumArray'

import { getGarbageCharge, getGarbageChargeDetail } from './garbage'
import { totalElectricityPerMonth } from './electricity'
import { getWaterCharge } from './water'

const hasGarbage = (garbageCharge: number, rate: number) => ({
    garbage: () => getGarbageCharge(garbageCharge, rate),
    garbageDetail: () => getGarbageChargeDetail(garbageCharge, rate),
})

const hasElectricity = (data: ElectricityData) => {
    const electricity = () => {
        const { from, to, amounts, rate } = data

        const days = getDays(frToDate(from), frToDate(to))
        const totalAmount = sumArray(amounts)
        const electricityPerMonth = totalElectricityPerMonth(totalAmount, days)

        return electricityPerMonth * rate
    }

    return {
        electricity,
        electricityDetail: () => `ÉLECTRICITÉ
        chargesÉlectricité = ${electricity()}`,
    }
}

const hasWater = (data: WaterData) => {
    const water = () => {
        return getWaterCharge(data)
    }
    const waterDetail = () =>
        `WATER
        chargesMensuelles : ${getWaterCharge(data)}`

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
