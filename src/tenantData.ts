import { Tenant } from '../data/dataType'
import { allData } from '../data/data'
import getMapedData from './getMapedData'
import { charges } from './charges'
import { getMonthOfLiving, getDebt } from './chargesRegularisation'

const getTenantData = (tenant: Tenant) => {
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

    return {
        data,
        current,
        real,
        difference,
        monthsOfLiving,
        debt,
        separator,
    }
}
export default getTenantData
