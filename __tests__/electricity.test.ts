import { sumArray } from '../src/utils/sumArray'
import { totalElectricityPerMonth } from '../src/electricity'

describe('Electricity.', () => {
    it('Can calculate a sum from an array.', () => {
        expect(sumArray([1, 2, 3])).toEqual(6)

        expect(sumArray([2, 4])).toEqual(6)

        expect(sumArray([4])).toEqual(4)
    })

    it('Can estimate total electricity cost per month.', () => {
        expect(totalElectricityPerMonth(12, 4)).toEqual(91.25)
    })
})
