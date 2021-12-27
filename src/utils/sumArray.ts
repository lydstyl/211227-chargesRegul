export const sumArray = (amounts: number[]): number =>
    amounts.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    )
