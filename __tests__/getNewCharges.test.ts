import { get } from 'http'
import { testData3 } from '../data/data'
import { getNewCharges } from '../src/chargesRegularisation'
import getNewChargesDetail from '../src/getNewCharges'
const tenant = testData3.tenants[0]

describe('New charges.', () => {
    it('Real charge with 3 unit less then current change to real.', () => {
        const result = getNewCharges(10, 13)
        expect(result).toEqual(10)
    })
    it('Real charge with 3 unit less then current change to real rounded.', () => {
        const result = getNewCharges(9.8, 13)
        expect(result).toEqual(10)
    })
    it('Real charge with 3 unit less then current change to real rounded.', () => {
        const result = getNewCharges(9.5, 13)
        expect(result).toEqual(10)
    })
    it('Real charge with 3 unit less then current change to real rounded.', () => {
        const result = getNewCharges(9.4, 13)
        expect(result).toEqual(9)
    })
    it('Real charge with less than 3 unit stay to current.', () => {
        const result = getNewCharges(10, 12)
        expect(result).toEqual(12)
    })
    it('Real charge same as current stay to current.', () => {
        const result = getNewCharges(10, 10)
        expect(result).toEqual(10)
    })
    it('Real charge with 1 unit more then current stay to current.', () => {
        const result = getNewCharges(10, 9)
        expect(result).toEqual(9)
    })
    it('Real charge with 3 unit or more then current change to real.', () => {
        const result = getNewCharges(10, 7)
        expect(result).toEqual(10)
    })
    it('Real charge with 3 unit or more then current change to real.', () => {
        const result = getNewCharges(11, 7)
        expect(result).toEqual(11)
    })
    it('Real charge with 3 unit or more then current change to real rounded.', () => {
        const result = getNewCharges(11.4, 7)
        expect(result).toEqual(11)
    })
    it('Real charge with 3 unit or more then current change to real rounded.', () => {
        const result = getNewCharges(11.5, 7)
        expect(result).toEqual(12)
    })
    it('Contain "NOUVELLES CHARGES"', () => {
        const result = getNewChargesDetail(tenant, 14.14)
        expect(result).toContain('NOUVELLES CHARGES')
    })
    it('Contain 54.', () => {
        const result = getNewChargesDetail(tenant, 14.14)
        expect(result).toContain('54.00 €')
    })
    it('Contain FACTURES ET RIB', () => {
        const result = getNewChargesDetail(tenant, 14.14)
        expect(result).toContain('FACTURES ET RIB')
    })
})
