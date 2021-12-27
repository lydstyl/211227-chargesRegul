import { ElectricityData, Data } from '../data/data' // interfaces

import { frToDate, getDays } from './utils/days'
import { sumArray } from './utils/sumArray'

import { getGarbageCharge, getGarbageChargeDetail } from './garbage'
import { totalElectricityPerMonth } from './electricity'

const hasGarbage = (garbageCharge: number, rate: number) => ({
    garbage: () => getGarbageCharge(garbageCharge, rate),
    garbageDetail: () => getGarbageChargeDetail(garbageCharge, rate),
})

const hasElectricity = (data: ElectricityData) => ({
    electricity: () => {
        const { from, to, amounts, rate } = data

        const days = getDays(frToDate(from), frToDate(to))
        const totalAmount = sumArray(amounts)
        const electricityPerMonth = totalElectricityPerMonth(totalAmount, days)

        return electricityPerMonth * rate
    },
    electricityDetail: () => ({}),
})

export const charges = (data: Data) => ({
    ...hasGarbage(data.garbage.garbageCharge, data.garbage.garbageRate),
    ...hasElectricity(data.electricity),
})
