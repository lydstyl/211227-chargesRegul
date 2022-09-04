import { HouseholdData } from '../data/dataType'
import { sumArray } from './utils/sumArray'
export const getHouseholdCharge = (houseHoldData: HouseholdData): number => {
    const charges = sumArray(houseHoldData.invoices)
    return charges
}
export const hasHousehold = (data: HouseholdData, rate: number) => {
    const houseHoldTotalCharges: number = getHouseholdCharge(data)
    const household = () => (houseHoldTotalCharges * rate) / 12

    const householdDetail = () =>
        `MÉNAGE
Voici les dernières estimations de dépenses (clés, produits d'entretien, prestations) : ${data.invoices.map(
            (invoice) => ` ${invoice} €`
        )}. Pour un total de ${houseHoldTotalCharges.toFixed(2)} €.
charges de ménage mensuelles 
= charges de ménage x votre taux / 12        
= ${houseHoldTotalCharges.toFixed(2)} x ${rate} / 12
= ${household().toFixed(2)} €`

    return {
        household,
        householdDetail,
    }
}
