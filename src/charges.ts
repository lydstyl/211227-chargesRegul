/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Data } from '../data/dataType'

import { hasGarbage } from './garbage'
import { hasElectricity } from './electricity'
import { hasWater } from './water'
import { hasHousehold } from './household'

export const charges = (data: Data) => ({
    ...hasGarbage(data.garbage.garbageCharge, data.garbage.garbageRate),
    ...hasElectricity(data.electricity),
    ...hasWater(data.water),
    ...hasHousehold(data.household, data.household.rate),
})
