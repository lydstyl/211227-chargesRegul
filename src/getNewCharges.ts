import { Tenant } from '../data/dataType'
import getTenantData from './tenantData'
import { getNewCharges } from './chargesRegularisation'

const getNewChargesDetail = (tenant: Tenant, householdExpenses: number) => {
    const { real, current, separator } = getTenantData(tenant)

    let txt = ''
    txt += `NOUVELLES CHARGES ARRONDIES
Vos nouvelles charges sont de ${getNewCharges(real, current).toFixed(2)} €.`
    txt += separator

    txt += `FACTURES ET RIB
Les justificatifs et le RIB sont accessibles ici : https://www.dropbox.com/scl/fo/3qkr1g2fro89cgnrybgv9/h?rlkey=zfxoutwhckslq97wq327ee2rd&dl=0`
    txt += separator

    return txt
}
export default getNewChargesDetail
