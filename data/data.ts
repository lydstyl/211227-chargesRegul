import { AllData, Data } from './dataType'

const buildingRate = 1 / 6
const rate32B = 1 / 4

// for 1 year or can be more or less ?
export const allData: AllData = {
    forAllTenants: {
        endDate: '03/02/2024', // Used for getMonthOfLiving(tenant.arrivalDate,allData.forAllTenants.endDate)
        garbage: {
            // Duration must be 1 year
            garbageCharge: 1396, // Cotisation 2023
        },
        water: {
            // Duration do not matter
            // Automation possible with BNP CSV
            waterInvoices: [
                { price: 681.11, consumption: 102 }, // Last invoice is consumption from january 2023 to jully 2023
            ],
        },
        electricity: {
            // Duration do not matter
            // Automation possible with BNP CSV
            from: '26/02/2023',
            to: '26/01/2024',
            amounts: [
                22.44, 26.02, 19.87, 19.45, 19.87, 19.45, 19.04, 21.14, 19.86,
                23.34, 21.61, 17.62,
            ],
        },
        household: {
            // Duration must be 1 year
            // Automation possible with BNP CSV
            invoices: [61.55 * 10, 63.35], // february 2023 to january 2024 (august 2023 is missing here)
        },
    },
    tenants: [
        {
            name: 'Zurek',
            arrivalDate: '01/01/2021', ////////// used for what ?
            current: 54, // current charges
            water: {
                // Duration do not matter
                meterReadings: [
                    {
                        first: { date: '30/08/2021', index: 712 },
                        second: { date: '07/09/2022', index: 740 },
                    },
                    // {
                    //     first: { date: '07/09/2022', index: 740 },
                    //     second: { date: '27/01/2024', index: 743 }, // impossible ?!
                    // },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
        // {
        //     name: 'Alaoui',
        //     arrivalDate: '01/01/2021', ////////// ?

        //     current: 78.19, /// 1/5 taxe foncière ... special

        //     // meter reading no rate
        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '18/11/2021', index: 0 }, // has it own invoice ...
        //                 second: { date: '07/09/2022', index: 0 },
        //             },
        //         ],
        //     },

        //     // building rate 6 appartments or more for Fruitier, T3 and Salvado ?
        //     garbage: { garbageRate: buildingRate },
        //     // 32 B rate 5 persons or 4 appartements ?
        //     electricity: { rate: 0 },
        //     household: { rate: 0 },
        // },
        // {
        //     name: 'Martel',
        //     arrivalDate: '01/01/2021', ////////// ?

        //     current: 40,

        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '05/09/2021', index: 968 },
        //                 second: { date: '07/09/2022', index: 1160 },
        //             },
        //         ],
        //     },

        //     garbage: { garbageRate: buildingRate },
        //     electricity: { rate: 0 },
        //     household: { rate: 0 },
        // },

        // {
        //     name: 'Leduc',
        //     arrivalDate: '01/01/2021', ////////// ?

        //     current: 30,

        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '08/09/2021', index: 39 },
        //                 second: { date: '07/09/2022', index: 41 },
        //             },
        //         ],
        //     },

        //     garbage: { garbageRate: buildingRate },
        //     electricity: { rate: rate32B },
        //     household: { rate: rate32B },
        // },
        // {
        //     name: 'Salvado',
        //     // arrivalDate: '01/01/2021',
        //     // arrivalDate: '07/09/2022', // march 2023 todo try 23/09/2022 (nouveau compteur eau)
        //     arrivalDate: '23/09/2022', // march 2023 todo try 23/09/2022 (nouveau compteur eau)

        //     current: 80, // march 2023

        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '23/09/2022', index: 0 }, // march 2023
        //                 second: { date: '03/03/2023', index: 25.6 }, // march 2023
        //             },
        //         ],
        //     },

        //     garbage: { garbageRate: buildingRate },
        //     electricity: { rate: rate32B },
        //     household: { rate: rate32B },
        // },
        // {
        //     name: 'Lebrun',
        //     arrivalDate: '07/06/2021',

        //     current: 15,

        //     water: {
        //         meterReadings: [
        //             {
        //                 first: { date: '18/11/2021', index: 0 },
        //                 second: { date: '07/09/2022', index: 11 },
        //             },
        //             {
        //                 first: { date: '08/09/2021', index: 132 },
        //                 second: { date: '07/09/2022', index: 138 },
        //             },
        //         ],
        //     },

        //     garbage: { garbageRate: buildingRate },
        //     electricity: { rate: rate32B },
        //     household: { rate: rate32B },
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
        invoices: [790.26], // Should be annual ? 16,46375
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
export const testData3: AllData = {
    forAllTenants: {
        endDate: '03/02/2024', // Used for getMonthOfLiving(tenant.arrivalDate,allData.forAllTenants.endDate)
        garbage: {
            // Duration must be 1 year
            garbageCharge: 1396, // Cotisation 2023
        },
        water: {
            // Duration do not matter
            // Automation possible with BNP CSV
            waterInvoices: [
                { price: 681.11, consumption: 102 }, // Last invoice is consumption from january 2023 to jully 2023
            ],
        },
        electricity: {
            // Duration do not matter
            // Automation possible with BNP CSV
            from: '26/02/2023',
            to: '26/01/2024',
            amounts: [
                22.44, 26.02, 19.87, 19.45, 19.87, 19.45, 19.04, 21.14, 19.86,
                23.34, 21.61, 17.62,
            ],
        },
        household: {
            // Duration must be 1 year
            // Automation possible with BNP CSV
            invoices: [61.55 * 10, 63.35], // february 2023 to january 2024 (august 2023 is missing here)
        },
    },
    tenants: [
        {
            name: 'Zurek',
            arrivalDate: '01/01/2021', ////////// used for what ?
            current: 54, // current charges
            water: {
                // Duration do not matter
                meterReadings: [
                    {
                        first: { date: '30/08/2021', index: 712 },
                        second: { date: '07/09/2022', index: 740 },
                    },
                    // {
                    //     first: { date: '07/09/2022', index: 740 },
                    //     second: { date: '27/01/2024', index: 743 }, // impossible ?!
                    // },
                ],
            },

            garbage: { garbageRate: buildingRate },
            electricity: { rate: rate32B },
            household: { rate: rate32B },
        },
    ],
}
