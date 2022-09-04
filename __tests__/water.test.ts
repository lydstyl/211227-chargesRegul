import { testData1, testData2 } from '../data/data'

import {
    getCostPerCubic,
    getOneMonthlyWaterConsumption,
    getAllMonthlyWaterConsumptions,
    getWaterCharge,
} from '../src/water'

import { charges } from '../src/charges'

describe('Water.', () => {
    it('Can calculate cost per cubic.', () => {
        const result1 = getCostPerCubic(testData1.water.waterInvoices)
        expect(result1).toEqual(1)

        expect(
            getCostPerCubic(testData2.water.waterInvoices).toFixed(2)
        ).toEqual('5.34')
    })

    it('Calculate 1 metter reading monthly consumption', () => {
        const result1 = getOneMonthlyWaterConsumption(
            testData1.water.meterReadings[0]
        )

        expect(result1.toFixed(2)).toEqual('2.97')
    })

    it('Calculate 2 metter readings monthly consumption', () => {
        const result2 = getAllMonthlyWaterConsumptions(
            testData2.water.meterReadings
        )

        expect(result2.toFixed(2)).toEqual('5.93')
    })

    it('Can calculate water charges.', () => {
        const result = getWaterCharge(testData2.water)
        expect(result.toFixed(2)).toEqual('31.72')

        const result2 = charges(testData2).water()
        expect(result2.toFixed(2)).toEqual('31.72')
    })

    it('Show water charges details.', () => {
        const detail = charges(testData2).waterDetail()

        expect(detail).toContain('EAU')
        expect(detail).toContain('31.72')
    })
})
