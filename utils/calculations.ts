import { DISCOUNT_TIERS, LOCATION_FEES } from '../constants';
import { CalculationData, CourseType, LocationType } from '../types';

export const calculatePrice = (
  courseType: CourseType,
  location: LocationType,
  participants: number
): CalculationData => {
  // Find tier. For 20+, max is 999 in config, so it matches.
  // We clamp max participants in UI, but safe check here.
  const tier = DISCOUNT_TIERS.find(
    (t) => participants >= t.min && participants <= t.max
  ) || DISCOUNT_TIERS[DISCOUNT_TIERS.length - 1];

  const locationFee = LOCATION_FEES[location as keyof typeof LOCATION_FEES] || 0;

  // Base prices (Fixed as per requirement)
  const normalBasePrice = courseType === 'asas' ? 250 : 350;
  
  // Get pre-calculated rounded price from tier config
  const discountedBasePrice = courseType === 'asas' ? tier.asasPrice : tier.lengkapPrice;

  const normalPricePerPerson = normalBasePrice + locationFee;
  const discountedPricePerPerson = discountedBasePrice + locationFee;

  const normalTotal = normalPricePerPerson * participants;
  const discountedTotal = discountedPricePerPerson * participants;
  const savings = normalTotal - discountedTotal;

  return {
    courseType,
    location,
    participants,
    tier,
    locationFee,
    normalBasePrice,
    discountedBasePrice,
    normalPricePerPerson,
    discountedPricePerPerson,
    normalTotal,
    discountedTotal,
    savings
  };
};