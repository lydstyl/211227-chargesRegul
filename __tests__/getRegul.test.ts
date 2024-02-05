import { allData } from '../data/data'
import { getGarbageCharge } from '../src/garbage'
import getRegul from '../src/getRegul' // Import the getRegul function from the appropriate file
import { household0 } from '../src/household'

import { testData3 } from '../data/data'

describe('Regul.', () => {
    it('Contain household word "RÉGULARISATION".', () => {
        expect(getRegul(allData.tenants[0])).toContain('RÉGULARISATION')
    })
    it('Contain household word "ménage".', () => {
        expect(getRegul(allData.tenants[0])).toContain('ménage')
    })
    it('Contain household word "ménage".', () => {
        expect(getRegul(allData.tenants[0])).toContain('ménage')
    })

    it('Contain ordures value.', () => {
        const result = getRegul(allData.tenants[0])
        expect(result).toContain('19.39')
    })
    it('Contain elec value.', () => {
        const result = getRegul(allData.tenants[0])
        expect(result).toContain('5.67')
    })
    it('Contain water value.', () => {
        const result = getRegul(allData.tenants[0])
        expect(result).toContain('15.21')
    })
    it('Contain household value.', () => {
        const result = getRegul(allData.tenants[0])
        expect(result).toContain('14.14')
    })
    it('Contain total value.', () => {
        const result = getRegul(allData.tenants[0])
        expect(result).toContain('54.41')
    })
})
