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

export interface Reading {
    date: string // frDate
    index: number // m3
}

export interface MeterReading {
    first: Reading
    second: Reading
}

export interface WaterInvoice {
    price: number
    consumption: number // m3
}

export interface WaterData {
    waterInvoices: WaterInvoice[]
    meterReadings: MeterReading[] // first and second read for each water meter
}
export interface Data {
    garbage: GarbageData
    electricity: ElectricityData
    water: WaterData
}

export const testData1: Data = {
    garbage: { garbageCharge: 1440, garbageRate: 1 / 6 },
    electricity: {
        from: '01/01/2021',
        to: '31/12/2021',
        amounts: [100, 265],
        rate: 1 / 2,
    },
    water: { waterInvoices: [], meterReadings: [] },
}

export const testData2: Data = {
    garbage: { garbageCharge: 1, garbageRate: 1 },
    electricity: {
        from: '29/01/2021',
        to: '01/09/2021',
        amounts: [26.1, 26.85, 28.63, 16.46],
        rate: 1 / 4,
    },
    water: { waterInvoices: [], meterReadings: [] },
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
