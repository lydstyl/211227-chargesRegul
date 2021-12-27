import { frToDate, getDays } from '../src/utils/days'

describe('Days.', () => {
    it('Transforme FR date to JS Date.', () => {
        const yyyy = 2021
        const mm = 12
        const dd = 27
        const frDate = `${dd}/${mm}/${yyyy}`

        const result = frToDate(frDate)

        expect(result.getFullYear()).toEqual(yyyy)
        expect(result.getMonth()).toEqual(mm - 1)
        expect(result.getDate()).toEqual(dd)
    })

    it('Can calculate number of days between 2 dates.', () => {
        const result = getDays(frToDate('20/12/2021'), frToDate('22/12/2021'))
        expect(result).toEqual(3)

        expect(getDays(frToDate('20/12/2021'), frToDate('29/12/2021'))).toEqual(
            10
        )

        expect(getDays(frToDate('31/12/2021'), frToDate('01/01/2022'))).toEqual(
            2
        )

        expect(getDays(frToDate('30/11/2021'), frToDate('29/12/2021'))).toEqual(
            30
        )
    })
})
