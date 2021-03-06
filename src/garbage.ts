export const getGarbageCharge = (garbageCharge: number, rate: number): number =>
    (garbageCharge / 12) * rate

export const getGarbageChargeDetail = (
    garbageCharge: number,
    rate: number
): string =>
    `ORDURES MÉNAGÈRES
Nombre d'occupants = 6
taux = 1 / occupants    
votre charge ordure ménagère = (taxe ordure ménagère / 12) x taux 
= (${garbageCharge} / 12) x ${rate.toFixed(2)} 
= ${getGarbageCharge(garbageCharge, rate).toFixed(2)} €`
