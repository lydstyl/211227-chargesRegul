import { charges } from '../src/charges'
import { testData1 } from '../data/data'
import { sumArray } from '../src/utils/sumArray'

const allCharges = charges(testData1)
const HOUSEHOLD = allCharges.household()
const HOUSEHOLD_DETAIL = allCharges.householdDetail()

describe('Household.', () => {
    it('Sum array.', () => {
        expect(sumArray([31.5, 27.6, 60.93 * 12])).toEqual(790.26)
    })
    it('Calculate household.', () => {
        expect(790.26 / 4 / 12).toEqual(16.46375)
    })
    it('Calculate household with toFixed 2.', () => {
        expect(+(16.46375).toFixed(2)).toEqual(16.46)
    })
    it('Can show charge detail.', () => {
        expect(HOUSEHOLD_DETAIL).toContain('MÉNAGE')
        expect(HOUSEHOLD_DETAIL).toContain(HOUSEHOLD.toFixed(2))
    })
    it('Calculate charges before toFixed 2.', () => {
        expect(HOUSEHOLD).toEqual(16.46375)
    })
    it('Can calculate charges.', () => {
        expect(HOUSEHOLD.toFixed(2)).toEqual('16.46')
    })
})
