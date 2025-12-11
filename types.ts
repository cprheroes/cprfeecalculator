export type Language = 'en' | 'ms';
export type Theme = 'light' | 'dark';
export type CourseType = '' | 'asas' | 'lengkap';
export type LocationType = '' | 'kt' | 'seremban' | 'onsite';

export interface Tier {
  min: number;
  max: number;
  discountPercent: number;
  asasPrice: number;
  lengkapPrice: number;
  label?: string; // e.g. "Recommended"
  style?: 'blue' | 'red'; // For animation
}

export interface CalculationData {
  courseType: CourseType;
  location: LocationType;
  participants: number;
  tier: Tier;
  locationFee: number;
  normalBasePrice: number;
  discountedBasePrice: number;
  normalPricePerPerson: number;
  discountedPricePerPerson: number;
  normalTotal: number;
  discountedTotal: number;
  savings: number;
}

export interface Translation {
  mainTitle: string;
  subtitle: string;
  labelLangLeft: string;
  labelLangRight: string;
  labelThemeLeft: string;
  labelThemeRight: string;
  labelCourse: string;
  labelLocation: string;
  labelParticipants: string;
  btnCalculate: string;
  titleNormal: string;
  titleDiscount: string;
  downloadNormalTitle: string;
  downloadDiscountTitle: string;
  btnNormalDocx: string;
  btnDiscountDocx: string;
  baseCourse: string;
  locationFee: string;
  subtotal: string;
  total: string;
  discount: string;
  formulaTitle: string;
  courseOptions: {
    select: string;
    asas: string;
    lengkap: string;
  };
  locationOptions: {
    select: string;
    kt: string;
    seremban: string;
    onsite: string;
  };
  tableHeaders: {
    participants: string;
    discount: string;
    formula: string;
    asas: string;
    lengkap: string;
  };
  footerNote: string;
}