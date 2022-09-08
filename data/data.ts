import { AllData, Data } from './dataType'

const buildingRate = 1 / 6
const rate32B = 1 / 4

export const allData: AllData = {
    forAllTenants: {
        endDate: '07/09/2022',
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
            invoices: [31.5, 27.6, 60.93 * 12],
        },
    },
    tenants: [
        {
            name: 'Alaoui',
            arrivalDate: '01/01/2021', ////////// ?

            current: 78.19, /// 1/5 taxe foncière ... special

            // meter reading no rate
            water: {
                meterReadings: [
                    {
                        first: { date: '18/11/2021', index: 0 }, // has it own invoice ...
                        second: { date: '07/09/2022', index: 0 },
                    },
                ],
            },

            // building rate 6 appartments or more for Fruitier, T3 and Salvado ?
            garbage: { garbageRate: buildingRate },
            // 32 B rate 5 persons or 4 appartements ?
            electricity: { rate: 0 },
            household: { rate: 0 },
        },
        {
            name: 'Martel',
            arrivalDate: '01/01/2021', ////////// ?

            current: 40,

            water: {
                meterReadings: [
                    {
                        first: { date: '05/09/2021', index: 968 },
                        second: { date: '07/09/2022', index: 1160 },
                    },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: 0 },
            household: { rate: 0 },
        },
        {
            name: 'Zurek',
            arrivalDate: '01/01/2021', ////////// ?

            current: 25,

            water: {
                meterReadings: [
                    {
                        first: { date: '30/08/2021', index: 712 },
                        second: { date: '07/09/2022', index: 740 },
                    },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
        {
            name: 'Leduc',
            arrivalDate: '01/01/2021', ////////// ?

            current: 30,

            water: {
                meterReadings: [
                    {
                        first: { date: '08/09/2021', index: 39 },
                        second: { date: '07/09/2022', index: 41 },
                    },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
        {
            name: 'Salvado',
            arrivalDate: '01/01/2021', ////////// ?

            current: 30,

            water: {
                meterReadings: [
                    {
                        first: { date: '08/09/2021', index: 0 },
                        second: { date: '07/09/2022', index: 79 },
                    },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
        {
            name: 'Lebrun',
            arrivalDate: '07/06/2021',

            current: 15,

            water: {
                meterReadings: [
                    {
                        first: { date: '18/11/2021', index: 0 },
                        second: { date: '07/09/2022', index: 11 },
                    },
                    {
                        first: { date: '08/09/2021', index: 132 },
                        second: { date: '07/09/2022', index: 138 },
                    },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
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
        invoices: [31.5, 27.6, 60.93 * 12],
        rate: rate32B,
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
        invoices: [31.5, 27.6, 60.93 * 12],
        rate: rate32B,
    },
}
