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
export interface HouseholdData {
    invoices: number[]
}
export interface Data {
    garbage: GarbageData
    electricity: ElectricityData
    water: WaterData
    household: HouseholdData
}
interface Garbage {
    garbageCharge: number
}
interface Water {
    waterInvoices: WaterInvoice[]
}
interface ForAllTenantsElectricity {
    from: string
    to: string
    amounts: number[]
}
interface ForAllTenants {
    endDate: string
    garbage: Garbage
    water: Water
    electricity: ForAllTenantsElectricity
    household: HouseholdData
}
interface TenantWater {
    meterReadings: MeterReading[]
}
interface TenantGarbage {
    garbageRate: number
}
interface TenantElectricity {
    rate: number
}
interface Tenant {
    name: string
    arrivalDate: string
    current: number // current charge
    garbage: TenantGarbage
    water: TenantWater
    electricity: TenantElectricity
}
export interface AllData {
    forAllTenants: ForAllTenants
    tenants: Tenant[]
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

export const allData: AllData = {
    forAllTenants: {
        endDate: '31/12/2021',
        garbage: {
            garbageCharge: 1403,
        },
        water: {
            waterInvoices: [
                { price: 2118.88, consumption: 69 + 145 + 153 },
                { price: 890.54, consumption: 148 },
            ],
        },
        electricity: {
            from: '26/07/2021',
            to: '26/07/2022',
            amounts: [
                16.46, 20.12, 16.34, 16.55, 21.58, 21.29, 3.55, 20.19, 20.31,
                19.68, 21, 20.02,
            ],
        },
        household: {
            invoices: [
                31.5, // produits, balais...
                27.6, // 2 clés
                60, // prestation estimation
            ],
        },
    },
    tenants: [
        {
            name: 'Zurek',
            arrivalDate: '01/06/2018',

            current: 25,

            garbage: { garbageRate: 1 / 6 },
            water: {
                meterReadings: [
                    {
                        first: { date: '01/09/2021', index: 10 },
                        second: { date: '01/01/2022', index: 22 },
                    },
                ],
            },
            electricity: { rate: 1 / 6 },
        },
        // {
        //     name: 'Lebrun',
        //     arrivalDate: '01/06/2021',
        //     current: 25,

        //     garbage: { garbageRate: 1 / 6 },
        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '01/09/2021', index: 10 },
        //                 second: { date: '01/01/2022', index: 22 },
        //             },
        //             {
        //                 first: { date: '01/09/2021', index: 10 },
        //                 second: { date: '01/01/2022', index: 22 },
        //             },
        //         ],
        //     },
        //     electricity: { rate: 1 / 6 },
        // },
    ],
}

export const testData1: Data = {
    garbage: { garbageCharge: 1440, garbageRate: 1 / 6 },
    electricity: {
        from: '01/01/2021',
        to: '31/12/2021',
        amounts: [100, 265],
        rate: 1 / 2,
    },
    water: {
        waterInvoices: [
            { price: 10, consumption: 20 },
            { price: 20, consumption: 20 },
            { price: 30, consumption: 20 },
        ],
        meterReadings: [
            {
                first: { date: '01/09/2021', index: 10 },
                second: { date: '01/01/2022', index: 22 },
            },
        ],
    },
    household: {
        invoices: [
            31.5, // produits, balais...
            27.6, // 2 clés
            60, // prestation estimation
        ],
    },
}

export const testData2: Data = {
    garbage: { garbageCharge: 1, garbageRate: 1 },
    electricity: {
        from: '29/01/2021',
        to: '01/09/2021',
        amounts: [26.1, 26.85, 28.63, 16.46],
        rate: 1 / 4,
    },
    water: {
        waterInvoices: [
            { price: 86.8, consumption: 27 },
            { price: 559.93, consumption: 94 },
            { price: 646.73, consumption: 121 },
        ],
        meterReadings: [
            {
                first: { date: '01/09/2021', index: 10 },
                second: { date: '01/01/2022', index: 22 },
            },
            {
                first: { date: '01/09/2021', index: 10 },
                second: { date: '01/01/2022', index: 22 },
            },
        ],
    },
    household: {
        invoices: [
            31.5, // produits, balais...
            27.6, // 2 clés
            60, // prestation estimation
        ],
    },
}

export default data
