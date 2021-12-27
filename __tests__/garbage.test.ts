import { charges } from '../src/charges'
import { testData1 } from '../data/data'

const GARBAGE = charges(testData1)
const GARBAGE_CHARGE = GARBAGE.garbage()

describe('Garbage.', () => {
    it('Can calculate charges.', () => {
        const result = GARBAGE_CHARGE

        expect(result).toEqual(20)
    })

    it('Can show charge detail.', () => {
        const result1 = GARBAGE_CHARGE

        const detail = GARBAGE.garbageDetail()

        expect(detail).toContain('ORDURES MÉNAGÈRES')
        expect(detail).toContain(result1.toString())
    })
})
