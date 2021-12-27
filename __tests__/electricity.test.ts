import { sumArray } from '../src/utils/sumArray'
import { totalElectricityPerMonth } from '../src/electricity'

import { testData1, testData2 } from '../data/data'
import { charges } from '../src/charges'

const ELECTRICITY = charges(testData2)
const ELECTRICITY_CHARGE = ELECTRICITY.electricity().toFixed(2)

describe('Electricity.', () => {
    it('Can calculate a sum from an array.', () => {
        expect(sumArray([1, 2, 3])).toEqual(6)

        expect(sumArray([2, 4])).toEqual(6)

        expect(sumArray([4])).toEqual(4)
    })

    it('Can estimate total electricity cost per month.', () => {
        expect(totalElectricityPerMonth(12, 4)).toEqual(91.25)
    })

    it('Can calculate electricity charges.', () => {
        const result = charges(testData1).electricity().toFixed(2)

        expect(result).toEqual('15.21')

        expect(ELECTRICITY_CHARGE).toEqual('3.45')
    })

    it('Can show details.', () => {
        const detail = ELECTRICITY.electricityDetail()

        expect(detail).toContain('ÉLECTRICITÉ')
        expect(detail).toContain(ELECTRICITY_CHARGE)
    })
})
