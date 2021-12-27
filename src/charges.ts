import { getGarbageCharge, getGarbageChargeDetail } from './garbage'

interface GarbageData {
    garbageCharge: number
    garbageRate: number
}

const hasGarbage = (garbageCharge: number, rate: number) => ({
    garbage: () => getGarbageCharge(garbageCharge, rate),
    garbageDetail: () => getGarbageChargeDetail(garbageCharge, rate),
})

export const charges = (data: GarbageData) => ({
    ...hasGarbage(data.garbageCharge, data.garbageRate),
})
