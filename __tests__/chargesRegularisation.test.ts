import {
    getTotalCharges,
    getMonthlyDifference,
    getMonthOfLiving,
    getDebt,
    getNewCharges,
} from '../src/charges'

describe('Regularization.', () => {
    it('Calculate total charges', () => {
        expect(getTotalCharges(10, 20.1, 30)).toEqual(60.1)
    })

    it('Calculate monthly carges difference', () => {
        expect(getMonthlyDifference(100, 25)).toEqual(75)
        expect(getMonthlyDifference(100, 200)).toEqual(-100)
    })

    it('Calculate months of living.', () => {
        const result1 = getMonthOfLiving('25/11/2020', '31/12/2021')
        expect(result1).toEqual(12)

        const result2 = getMonthOfLiving('01/12/2021', '31/12/2021').toFixed(2)
        expect(result2).toEqual('1.02')

        const result3 = getMonthOfLiving('01/02/2021', '31/12/2021').toFixed(2)
        expect(result3).toEqual('10.98')
    })

    it('Calculate debt.', () => {
        expect(getDebt(10, 12)).toEqual(120)

        expect(getDebt(10, 8)).toEqual(80)

        expect(getDebt(-10, 8)).toEqual(-80)

        expect(getDebt(-11.11, 6)).toEqual(-66.66)
    })

    it('Calculate new charges', () => {
        expect(getNewCharges(32.9, 30)).toEqual(30)
        expect(getNewCharges(34, 30)).toEqual(34)
        expect(getNewCharges(29, 30)).toEqual(30)
        expect(getNewCharges(25, 30)).toEqual(25)
        expect(getNewCharges(5.2, 30)).toEqual(5)
        expect(getNewCharges(5.5, 30)).toEqual(6)
        expect(getNewCharges(100.67, 30)).toEqual(101)
    })
})
