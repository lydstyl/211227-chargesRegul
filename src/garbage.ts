export const getGarbageCharge = (garbageCharge: number, rate: number): number =>
    (garbageCharge / 12) * rate

export const getGarbageChargeDetail = (
    garbageCharge: number,
    rate: number
): string =>
    `ORDURES MÉNAGÈRES
votre charge ordure ménagère = (taxe ordure ménagère / 12) x taux 
= (${garbageCharge} / 12) x ${rate.toFixed(2)} 
= ${getGarbageCharge(garbageCharge, rate).toFixed(2)} €`

export const hasGarbage = (garbageCharge: number, rate: number) => ({
    garbage: () => getGarbageCharge(garbageCharge, rate),
    garbageDetail: () => getGarbageChargeDetail(garbageCharge, rate),
})
