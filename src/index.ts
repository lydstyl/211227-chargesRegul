/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { allData } from '../data/data'
import { charges, Charges } from './charges'
import getTenantData from './tenantData'
import getRegul from './getRegul'
import getNewChargesDetail from './getNewCharges'

allData.tenants.forEach((tenant) => {
    const { data, separator } = getTenantData(tenant)

    function addSeparator(txt: string) {
        return (txt += separator)
    }

    let txt = addSeparator('')

    txt += addSeparator(`Votre nom : ${tenant.name}`)

    const getChargesNames: string[] = [
        'waterDetail',
        'electricityDetail',
        'garbageDetail',
        'householdDetail',
    ]

    const theCharges: Charges = charges(data)

    getChargesNames.forEach((getChargeName: string) => {
        const theCurrentCharge = (theCharges as any)[getChargeName]()
        txt += addSeparator(theCurrentCharge)
    })

    // REGUL
    txt += getRegul(tenant)

    const householdExpenses = charges(data).household()
    txt += getNewChargesDetail(tenant, householdExpenses)

    console.log(txt)
})
