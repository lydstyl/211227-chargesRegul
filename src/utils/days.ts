export const frToDate = (frDate: string): Date => {
    const arr = frDate.split('/')
    const yyyy = arr[2]
    const mm = arr[1]
    const dd = arr[0]

    return new Date(`${yyyy}-${mm}-${dd}`)
}

export const getDays = (first: Date, second: Date): number => {
    const diffMili = second.getTime() - first.getTime()
    const diffDay = diffMili / (1000 * 60 * 60 * 24)

    return diffDay + 1
}
