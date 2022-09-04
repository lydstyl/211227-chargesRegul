import { HouseholdData } from '../data/dataType'
import { sumArray } from './utils/sumArray'
export const getHouseholdCharge = (houseHoldData: HouseholdData): number => {
    const charges = sumArray(houseHoldData.invoices)
    return charges
}
