import { MeterReading, WaterInvoice, WaterData } from '../data/data'
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
