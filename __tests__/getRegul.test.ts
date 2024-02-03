import { allData } from '../data/data'
import { getGarbageCharge } from '../src/garbage'
import getRegul from '../src/getRegul' // Import the getRegul function from the appropriate file
import { household0 } from '../src/household'

describe('Regul.', () => {
    it('Contain household word "ménage"', () => {
        expect(getRegul(allData.tenants[0])).toContain('ménage')
    })
    // it('Contain household charge.', () => {
    //     // const xxx = `${household().toFixed(2)} €`

    //     expect(getRegul(allData.tenants[0])).toContain(
    //         `${household0().toFixed(2)} €`
    //     )
    // })
})

// = charges de ménage x votre taux / 12
// = ${houseHoldTotalCharges.toFixed(2)} x ${rate} / 12
// = ${household().toFixed(2)} €`
