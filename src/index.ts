/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { allData } from '../data/data'
import getMapedData from './getMapedData'
import { charges } from './charges'
import {
    getMonthOfLiving,
    getDebt,
    getNewCharges,
} from './chargesRegularisation'

allData.tenants.forEach((tenant) => {
    const data = getMapedData(allData, tenant)
    const current: number = tenant.current
    const real: number =
        charges(data).garbage() +
        charges(data).electricity() +
        charges(data).water()
    const difference = real - current
    const monthsOfLiving = getMonthOfLiving(
        tenant.arrivalDate,
        allData.forAllTenants.endDate
    )
    const debt = getDebt(difference, monthsOfLiving)
    const separator = '\n-------------------------------------------\n\n'

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

    // NEW CHARGES
    txt += `NOUVELLES CHARGES
En prenant en compte les futures charges de ménages (${householdExpenses.toFixed(
        2
    )} €)
Vos nouvelles charges sont de ${getNewCharges(
        real + householdExpenses,
        current
    ).toFixed(2)} €.`
    txt += separator

    txt += `FACTURES ET RIB
Les justificatifs et le RIB sont accessibles ici : https://www.dropbox.com/scl/fo/18wau76f8hf05wi79q5ae/h?dl=0&rlkey=7xkia2z17301d3jf7bdijuz2u`
    txt += separator

    console.log(txt)
})
