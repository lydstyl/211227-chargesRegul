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
    rate: number
}
export interface Data {
    // or Maped Data
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
interface AllElectricity {
    from: string
    to: string
    amounts: number[]
}
interface Invoices {
    invoices: number[]
}
interface ForAllTenants {
    endDate: string
    garbage: Garbage
    water: Water
    electricity: AllElectricity
    household: Invoices
}
interface TenantWater {
    meterReadings: MeterReading[]
}
interface TenantGarbage {
    garbageRate: number
}
interface Rate {
    rate: number
}
export interface Tenant {
    name: string
    arrivalDate: string
    current: number // current charge
    garbage: TenantGarbage
    water: TenantWater
    electricity: Rate
    household: Rate
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

const garbageRate = 1 / 6
const householdRate = 1 / 4
const houseHoldEstimate = 60 * 12

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
                houseHoldEstimate,
            ],
        },
    },
    tenants: [
        {
            name: 'Zurek',
            arrivalDate: '01/06/2018',

            current: 25,

            garbage: { garbageRate },
            water: {
                meterReadings: [
                    {
                        first: { date: '01/09/2021', index: 10 },
                        second: { date: '01/01/2022', index: 22 },
                    },
                ],
            },
            electricity: { rate: garbageRate },
            household: { rate: householdRate },
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
            houseHoldEstimate,
        ],
        rate: householdRate,
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
            houseHoldEstimate,
        ],
        rate: householdRate,
    },
}

export default data
