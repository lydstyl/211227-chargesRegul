import { charges } from '../src/charges'
import { testData1 } from '../data/data'

const allCharges = charges(testData1)
const HOUSEHOLD = allCharges.household()
const HOUSEHOLD_DETAIL = allCharges.householdDetail()

describe('Household.', () => {
    it('Can calculate charges.', () => {
        const result = HOUSEHOLD

        expect(HOUSEHOLD.toFixed(2)).toEqual('16.23')
    })

    it('Can show charge detail.', () => {
        const result = HOUSEHOLD

        const detail = HOUSEHOLD_DETAIL

        expect(detail).toContain('MÉNAGE')
        expect(detail).toContain(result.toFixed(2))
    })
})
