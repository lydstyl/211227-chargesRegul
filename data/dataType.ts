export interface Invoices {
    invoices: number[]
}
export interface HouseholdData extends Invoices {
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
export interface Water {
    waterInvoices: WaterInvoice[]
}
export interface TenantWater {
    meterReadings: MeterReading[] // first and second read for each water meter
}
export interface WaterData extends Water, TenantWater {}

export interface AllElectricity {
    from: string
    to: string
    amounts: number[]
}
export interface ElectricityData extends AllElectricity {
    rate: number
}

export interface Garbage {
    garbageCharge: number
}
export interface GarbageData {
    garbageCharge: number
    garbageRate: number
}

export interface ForAllTenants {
    endDate: string
    garbage: Garbage
    water: Water
    electricity: AllElectricity
    household: Invoices
}

export interface Rate {
    rate: number
}
export interface TenantGarbage {
    garbageRate: number
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

export interface Data {
    // or Maped Data
    garbage: GarbageData
    electricity: ElectricityData
    water: WaterData
    household: HouseholdData
}

export interface AllData {
    forAllTenants: ForAllTenants
    tenants: Tenant[]
}
