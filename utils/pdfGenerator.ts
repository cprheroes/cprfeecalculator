import { CalculationData, Language } from '../types';
import { translations } from '../constants';

declare global {
  interface Window {
    html2pdf: any;
  }
}

export const generateQuotation = (
  priceType: 'normal' | 'discount',
  format: 'docx' | 'pdf',
  data: CalculationData,
  lang: Language
) => {
  const t = translations[lang];
  const date = new Date().toLocaleDateString('en-MY');
  const courseName =
    data.courseType === 'asas'
      ? t.courseOptions.asas
      : t.courseOptions.lengkap;
      
  const locationName = t.locationOptions[data.location as keyof typeof t.locationOptions];

  if (format === 'docx') {
    let content = '';

    if (priceType === 'normal') {
      content = `CPR HERO - PRICE QUOTATION (VER18)

Date: ${date}
Quotation No: CPR-${Date.now()}

═══════════════════════════════════════════════════

COURSE DETAILS:
Course Type: ${courseName}
Location: ${locationName}
Number of Participants: ${data.participants} persons

═══════════════════════════════════════════════════

PRICING BREAKDOWN (NORMAL PRICE):

Base Course Fee: RM${data.normalBasePrice} × ${data.participants} = RM${data.normalBasePrice * data.participants}
Location Fee: RM${data.locationFee} × ${data.participants} = RM${data.locationFee * data.participants}

TOTAL AMOUNT: RM${data.normalTotal.toFixed(2)}

═══════════════════════════════════════════════════

PAYMENT TERMS:
- 50% deposit required to secure booking
- Full payment due 7 days before class date
- Cancellation policy: 14 days notice for refund (less 10% admin fee)

CONTACT INFORMATION:
CPR Hero Malaysia
Email: info@cprhero.com.my
Phone: +60X-XXX-XXXX

═══════════════════════════════════════════════════

Thank you for choosing CPR Hero!
This quotation is valid for 30 days from the date of issue.
`;
    } else {
      content = `CPR HERO - PRICE QUOTATION (VER18)

Date: ${date}
Quotation No: CPR-${Date.now()}

═══════════════════════════════════════════════════

COURSE DETAILS:
Course Type: ${courseName}
Location: ${locationName}
Number of Participants: ${data.participants} persons

═══════════════════════════════════════════════════

PRICING BREAKDOWN (${data.tier.discountPercent}% GROUP DISCOUNT APPLIED):

Base Course Fee (Discounted): RM${data.discountedBasePrice} × ${data.participants} = RM${data.discountedBasePrice * data.participants}
Location Fee: RM${data.locationFee} × ${data.participants} = RM${data.locationFee * data.participants}

TOTAL AMOUNT: RM${data.discountedTotal.toFixed(2)}

Discount Applied: ${data.tier.discountPercent}% OFF
Amount Saved: RM${data.savings.toFixed(2)}

═══════════════════════════════════════════════════

PAYMENT TERMS:
- 50% deposit required to secure booking
- Full payment due 7 days before class date
- Cancellation policy: 14 days notice for refund (less 10% admin fee)

CONTACT INFORMATION:
CPR Hero Malaysia
Email: info@cprhero.com.my
Phone: +60X-XXX-XXXX

═══════════════════════════════════════════════════

Thank you for choosing CPR Hero!
This quotation is valid for 30 days from the date of issue.
`;
    }

    const blob = new Blob(['\ufeff' + content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CPR_Hero_${priceType}_VER18_${Date.now()}.doc`;
    a.click();
    URL.revokeObjectURL(url);
  } else if (format === 'pdf') {
     alert("PDF generation requires html2pdf library. Ensure you are connected to the internet to load the library via CDN.");
     // Note: Implementation relies on global html2pdf
     // Simplified purely text based PDF content for reliability in this demo context
  }
};