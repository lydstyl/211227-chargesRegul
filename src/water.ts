import { MeterReading, WaterInvoice, WaterData } from '../data/dataType'
import { frToDate, getDays } from './utils/days'

export const getCostPerCubic = (waterInvoices: WaterInvoice[]): number => {
    let sumPrices = 0
    let sumConsumptions = 0

    waterInvoices.forEach((invoice) => {
        sumPrices += invoice.price
        sumConsumptions += invoice.consumption
    })

    return sumPrices / sumConsumptions
}

export const getOneMonthlyWaterConsumption = (
    meterReading: MeterReading
): number => {
    const consumption = meterReading.second.index - meterReading.first.index

    const date1 = frToDate(meterReading.first.date)
    const date2 = frToDate(meterReading.second.date)
    const days = getDays(date1, date2)

    const dayConsumption = consumption / days

    return (dayConsumption * 365) / 12 // m3
}

export const getAllMonthlyWaterConsumptions = (
    meterReadings: MeterReading[]
): number => {
    let monthlyConsumption = 0

    meterReadings.forEach(
        (meterReading) =>
            (monthlyConsumption += getOneMonthlyWaterConsumption(meterReading))
    )

    return monthlyConsumption
}

export const getWaterCharge = (waterData: WaterData): number => {
    const waterConsumption = getAllMonthlyWaterConsumptions(
        waterData.meterReadings
    )

    const costPerCubic = getCostPerCubic(waterData.waterInvoices)

    return costPerCubic * waterConsumption
}

export const hasWater = (data: WaterData) => {
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
= somme des couts en € / somme des consommations en m3
= ${getCostPerCubic(data.waterInvoices).toFixed(2)} € / m3
En utilisant vos relevés, nous pouvons en déduire votre consommation mensuelle en m3 
= ${getAllMonthlyWaterConsumptions(data.meterReadings).toFixed(2)} m3
Vos charges d'eau mensuelle = votre consommation mensuelle x cout d'1m3
= ${getWaterCharge(data).toFixed(2)} €`

    return {
        water,
        waterDetail,
    }
}
