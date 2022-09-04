/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { allData } from '../data/data'
import { charges, Charges } from './charges'
import getTenantData from './tenantData'
import getRegul from './getRegul'
import getNewChargesDetail from './getNewCharges'

allData.tenants.forEach((tenant) => {
    const { data, separator } = getTenantData(tenant)
    const theCharges: Charges = charges(data)
    const getChargesNames: string[] = [
        'waterDetail',
        'electricityDetail',
        'garbageDetail',
        'householdDetail',
    ]
    let txt = addSeparator('')

    txt += addSeparator(`Votre nom : ${tenant.name}`)

    // CHARGES DETAILS
    getChargesNames.forEach((getChargeName: string) => {
        const theCurrentCharge = (theCharges as any)[getChargeName]()
        txt += addSeparator(theCurrentCharge)
    })

    // REGUL
    txt += getRegul(tenant)

    // NEW CHARGES
    const householdExpenses = charges(data).household()
    txt += getNewChargesDetail(tenant, householdExpenses)

    console.log(txt)

    function addSeparator(txt: string) {
        return (txt += separator)
    }
})
