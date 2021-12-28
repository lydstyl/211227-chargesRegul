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
