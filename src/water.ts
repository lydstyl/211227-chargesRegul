import { MeterReading, WaterInvoice } from '../data/data'
import { getDays } from './utils/days'

const getCostPerCubic = (waterInvoices: WaterInvoice[]): number => 1

const getOneMonthlyWaterConsumption = (meterReading: MeterReading): number => 1

const getAllMonthlyWaterConsumptions = (
    meterReadings: MeterReading[]
): number => 1

const getWaterCharge = (): number => 1
