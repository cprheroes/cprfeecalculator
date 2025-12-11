import { Tier, Translation } from './types';

// Updated VER18 Discount Logic
// 10-14: 15% (was 10%)
// 15-19: 17% (was 13%)
// 20+:   25% (was 17%)
export const DISCOUNT_TIERS: Tier[] = [
  { min: 1, max: 1, discountPercent: 0, asasPrice: 250, lengkapPrice: 350 },
  { min: 2, max: 4, discountPercent: 4, asasPrice: 240, lengkapPrice: 336 },
  { min: 5, max: 9, discountPercent: 7, asasPrice: 233, lengkapPrice: 326 },
  { 
    min: 10, 
    max: 14, 
    discountPercent: 15, 
    asasPrice: 213, // 250 * 0.85 = 212.5 -> 213
    lengkapPrice: 298, // 350 * 0.85 = 297.5 -> 298
    label: 'Recommended',
    style: 'blue'
  },
  { 
    min: 15, 
    max: 19, 
    discountPercent: 17, 
    asasPrice: 208, // 250 * 0.83 = 207.5 -> 208
    lengkapPrice: 291, // 350 * 0.83 = 290.5 -> 291
  },
  { 
    min: 20, 
    max: 999, // Represents "20 & more"
    discountPercent: 25, 
    asasPrice: 188, // 250 * 0.75 = 187.5 -> 188
    lengkapPrice: 263, // 350 * 0.75 = 262.5 -> 263
    label: 'Most Popular',
    style: 'red'
  }
];

export const LOCATION_FEES = {
  kt: 0,
  seremban: 100,
  onsite: 100
};

export const translations: Record<string, Translation> = {
  en: {
    mainTitle: 'CPR Hero',
    subtitle: 'Professional CPR Training Price Calculator',
    labelLangLeft: 'English',
    labelLangRight: 'Bahasa',
    labelThemeLeft: 'Light',
    labelThemeRight: 'Dark',
    labelCourse: 'Course Type:',
    labelLocation: 'Location:',
    labelParticipants: 'Number of Participants (Max 25):',
    btnCalculate: 'Calculate Price',
    titleNormal: 'Normal Price (Without Discount)',
    titleDiscount: 'Discounted Price (Group Discount Applied)',
    downloadNormalTitle: 'Download Normal Price Quotation',
    downloadDiscountTitle: 'Download Discounted Price Quotation',
    btnNormalDocx: 'DOCX Format',
    btnDiscountDocx: 'DOCX Format',
    baseCourse: 'Base Course Fee',
    locationFee: 'Location Fee',
    subtotal: 'Subtotal per Person',
    total: 'TOTAL',
    discount: 'Discount Applied',
    formulaTitle: 'Complete Formula Reference Table',
    courseOptions: {
      select: '-- Select --',
      asas: 'Kelas Asas | Little Hero (4 hours) - RM250',
      lengkap: 'Kelas Lengkap | Super Hero (6 hours) - RM350'
    },
    locationOptions: {
      select: '-- Select --',
      kt: 'Kuala Terengganu (CPR Hero Premises) - RM0',
      seremban: 'Seremban (CPR Hero Premises) - +RM100',
      onsite: 'On-site (Your Location) - +RM100'
    },
    tableHeaders: {
      participants: 'Participants',
      discount: 'Discount',
      formula: 'Formula',
      asas: 'Kelas Asas',
      lengkap: 'Kelas Lengkap'
    },
    footerNote: '*Rounded from: 212.5 → 213 | 297.5 → 298 | 207.5 → 208 | 290.5 → 291 | 187.5 → 188 | 262.5 → 263'
  },
  ms: {
    mainTitle: 'CPR Hero',
    subtitle: 'Kalkulator Harga Latihan CPR Profesional',
    labelLangLeft: 'English',
    labelLangRight: 'Bahasa',
    labelThemeLeft: 'Cerah',
    labelThemeRight: 'Gelap',
    labelCourse: 'Jenis Kursus:',
    labelLocation: 'Lokasi:',
    labelParticipants: 'Bilangan Peserta (Maksimum 25):',
    btnCalculate: 'Kira Harga',
    titleNormal: 'Harga Biasa (Tanpa Diskaun)',
    titleDiscount: 'Harga Diskaun (Diskaun Kumpulan Digunakan)',
    downloadNormalTitle: 'Muat Turun Sebut Harga Biasa',
    downloadDiscountTitle: 'Muat Turun Sebut Harga Diskaun',
    btnNormalDocx: 'Format DOCX',
    btnDiscountDocx: 'Format DOCX',
    baseCourse: 'Yuran Kursus Asas',
    locationFee: 'Yuran Lokasi',
    subtotal: 'Jumlah Kecil per Orang',
    total: 'JUMLAH KESELURUHAN',
    discount: 'Diskaun Digunakan',
    formulaTitle: 'Jadual Rujukan Formula Lengkap',
    courseOptions: {
      select: '-- Pilih --',
      asas: 'Kelas Asas | Little Hero (4 jam) - RM250',
      lengkap: 'Kelas Lengkap | Super Hero (6 jam) - RM350'
    },
    locationOptions: {
      select: '-- Pilih --',
      kt: 'Kuala Terengganu (Premis CPR Hero) - RM0',
      seremban: 'Seremban (Premis CPR Hero) - +RM100',
      onsite: 'Di Lokasi Anda (On-site) - +RM100'
    },
    tableHeaders: {
      participants: 'Peserta',
      discount: 'Diskaun',
      formula: 'Formula',
      asas: 'Kelas Asas',
      lengkap: 'Kelas Lengkap'
    },
    footerNote: '*Dibundarkan dari: 212.5 → 213 | 297.5 → 298 | 207.5 → 208 | 290.5 → 291 | 187.5 → 188 | 262.5 → 263'
  }
};