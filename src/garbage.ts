export const getGarbageCharge = (garbageCharge: number, rate: number): number =>
    (garbageCharge / 12) * rate

export const getGarbageChargeDetail = (
    garbageCharge: number,
    rate: number
): string =>
    `ORDURES MÉNAGÈRES
occupants = 6
taux = 1 / occupants    
chargesOrduresMénagères = (taxeOrdureMénagère / 12) * taux = (${garbageCharge} / 12) * ${rate}=${getGarbageCharge(
        garbageCharge,
        rate
    )}`
