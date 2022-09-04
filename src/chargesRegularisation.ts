import { frToDate, getDays } from './utils/days'

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
