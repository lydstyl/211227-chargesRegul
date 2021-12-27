interface GarbageData {
    garbageCharge: number
    garbageRate: number
}

export interface ElectricityData {
    from: string // frDate
    to: string // frDate
    amounts: number[]
    rate: number
}

export interface Data {
    garbage: GarbageData
    electricity: ElectricityData
}

export const testData1: Data = {
    garbage: { garbageCharge: 1, garbageRate: 1 },
    electricity: {
        from: '29/01/2021',
        to: '01/09/2021',
        amounts: [40, 60],
        rate: 1 / 6,
    },
}

const data = {
    forAllTenants: {
        taxeOrdureMénagère: 1403,
    },
    tenants: [
        {
            name: 'Zurek',
        },
    ],
}

export default data
