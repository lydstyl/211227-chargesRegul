import { getData } from '../src/data'

const data = getData()

describe('Garbage charges.', () => {
    it('Can get a data object.', () => {
        expect(typeof data).toEqual('object')
    })
    it('Data contains forAllTenants that contains taxeOrdureMénagère.', () => {
        expect(data.forAllTenants.taxeOrdureMénagère).toBeGreaterThan(0)
    })

    it('Data contains tenants.', () => {
        expect(data.tenants.length).toBeGreaterThanOrEqual(0)
    })
})
