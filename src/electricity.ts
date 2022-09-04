import { ElectricityData } from '../data/dataType'
import { frToDate, getDays } from './utils/days'
import { sumArray } from './utils/sumArray'

export const totalElectricityPerMonth = (
    totalAmount: number,
    days: number
): number => {
    const totalPerDay = totalAmount / days
    const totalPerYear = totalPerDay * 365
    return totalPerYear / 12
}

export const hasElectricity = (data: ElectricityData) => {
    const { from, to, amounts, rate } = data
    const days = getDays(frToDate(from), frToDate(to))
    const totalAmount = sumArray(amounts)
    const electricityPerMonth = totalElectricityPerMonth(totalAmount, days)

    const electricity = () => {
        return electricityPerMonth * rate
    }

    return {
        electricity,
        electricityDetail: () => `ÉLECTRICITÉ
Depuis le ${from} et jusqu'au ${to}, les montant des factures sont :${amounts.map(
            (a) => ` ${a.toFixed(2)} €`
        )}
Cela fait un total de ${totalAmount.toFixed(2)} € dépensé en ${getDays(
            frToDate(from),
            frToDate(to)
        )} jours.
Nous pouvons donc optenir le cout par jour puis celui pour 1 an et le diviser par 12 pour obtenir le cout par mois.
Le cout par mois est donc de ${totalElectricityPerMonth(
            totalAmount,
            days
        ).toFixed(2)} € pour l'ensemble des occupants.
Vos charges d'électricité sont donc de 
= cout par mois x votre taux d'utilisation d'électricité
= ${electricityPerMonth.toFixed(2)} x ${rate.toFixed(2)} 
= ${electricity().toFixed(2)} €`,
    }
}
