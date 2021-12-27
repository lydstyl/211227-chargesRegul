export const totalElectricityPerMonth = (
    totalAmount: number,
    days: number
): number => {
    const totalPerDay = totalAmount / days
    const totalPerYear = totalPerDay * 365
    return totalPerYear / 12
}
