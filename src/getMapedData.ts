import { Data, AllData, Tenant } from '../data/dataType'

const getMapedData = (allData: AllData, tenant: Tenant): Data => ({
    garbage: { ...allData.forAllTenants.garbage, ...tenant.garbage },
    electricity: {
        ...allData.forAllTenants.electricity,
        ...tenant.electricity,
    },
    water: { ...allData.forAllTenants.water, ...tenant.water },
    household: {
        ...allData.forAllTenants.household,
        ...tenant.household,
    },
})

export default getMapedData
