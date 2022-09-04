import { Tenant } from '../data/dataType'
import getTenantData from './tenantData'
import { getNewCharges } from './chargesRegularisation'

const getNewChargesDetail = (tenant: Tenant, householdExpenses: number) => {
    const { real, current, separator } = getTenantData(tenant)

    let txt = ''
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

    return txt
}
export default getNewChargesDetail
