/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { allData } from '../data/data'
import { charges } from './charges'
import getTenantData from './tenantData'
import getNewChargesDetail from './getNewCharges'

allData.tenants.forEach((tenant) => {
    const { data, current, real, difference, monthsOfLiving, debt, separator } =
        getTenantData(tenant)

    let txt = ``

    txt += separator
    txt += `Votre nom : ${tenant.name}`
    txt += separator

    txt += charges(data).garbageDetail()
    txt += separator

    txt += charges(data).electricityDetail()
    txt += separator

    txt += charges(data).waterDetail()
    txt += separator

    txt += charges(data).householdDetail()
    txt += separator

    // REGUL
    txt += `RÉGULARISATION
Total de vos charges réelles = ordure ménagère + électricité + eau
= ${charges(data).garbage().toFixed(2)} + ${charges(data)
        .electricity()
        .toFixed(2)} + ${charges(data).water().toFixed(2)}
= ${real.toFixed(2)}
Vos charges actuelles sont de ${current.toFixed(2)} € 
La différence avec vos charges réelles est donc de ${difference.toFixed(2)} €
Nombre de mois pris en compte (selon votre date d'arrivé dans votre logement): ${monthsOfLiving.toFixed(
        2
    )} mois.
Ce que vous devez ou ce que la SCI vous doit si négatif
= nombre de mois x difference
= ${monthsOfLiving.toFixed(2)} x ${difference.toFixed(2)}
= ${debt.toFixed(
        2
    )} € à virer (RIB à retrouver via le lien ci-dessous) ou qui vous sera viré si négatif dans ce cas merce d'envoyer votre RIB à lydstyl@gmail.com.`
    txt += separator

    const householdExpenses = charges(data).household()
    txt += getNewChargesDetail(tenant, householdExpenses)

    console.log(txt)
})
