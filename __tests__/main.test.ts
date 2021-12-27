import { getData } from '../index'

describe('First tests.', () => {
    it('Can get a data object.', () => {
        const result = getData()

        expect(typeof result).toEqual('object')
    })
})
