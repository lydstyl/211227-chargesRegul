import { charges } from '../src/charges'

const GARBAGE_DATA = {
    garbageCharge: 1440,
    garbageRate: 1 / 6,
}

const GARBAGE = charges(GARBAGE_DATA)
const GARBAGE_CHARGE = charges(GARBAGE_DATA).garbage()

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
