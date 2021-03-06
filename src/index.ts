/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Data, allData } from '../data/data'

import { charges, getMonthOfLiving, getDebt, getNewCharges } from './charges'

const mapData = (
    allData: {
        forAllTenants: any
        tenants?: {
            name: string
            arrivalDate: string
            garbage: { garbageRate: number }
            water: {
                meterReadings: {
                    first: { date: string; index: number }
                    second: { date: string; index: number }
                }[]
            }
            electricity: { rate: number }
        }[]
    },
    tenant: {
        name?: string
        arrivalDate?: string
        garbage: any
        water: any
        electricity: any
    }
): Data => ({
    garbage: { ...allData.forAllTenants.garbage, ...tenant.garbage },
    electricity: {
        ...allData.forAllTenants.electricity,
        ...tenant.electricity,
    },
    water: { ...allData.forAllTenants.water, ...tenant.water },
})

let txt = ``

const separator = '\n-------------------------------------------\n\n'

allData.tenants.forEach((tenant) => {
    txt += separator
    txt += `Votre nom : ${tenant.name}`
    txt += separator

    const data = mapData(allData, tenant)

    txt += charges(data).garbageDetail()
    txt += separator

    txt += charges(data).electricityDetail()
    txt += separator

    txt += charges(data).waterDetail()
    txt += separator

    const real: number =
        charges(data).garbage() +
        charges(data).electricity() +
        charges(data).water()

    const current: number = tenant.current

    const difference = real - current
    const monthsOfLiving = getMonthOfLiving(
        tenant.arrivalDate,
        allData.forAllTenants.endDate
    )

    const debt = getDebt(difference, monthsOfLiving)

    // total
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
    )} € à virer (RIB ci-joint) ou qui vous sera viré si négatif dans ce cas merce d'envoyer votre RIB à lydstyl@gmail.com.

Vos nouvelles charges ${getNewCharges(real, current).toFixed(2)} €
            `
    txt += separator

    txt +=
        'Les justificatifs sont accessibles ici : https://drive.google.com/drive/folders/1L0OMQrmE9W1-uUQl1Rwuh_qWL1616m9x?usp=sharing'
})

console.log(txt)
