import React from 'react';
import { CalculationData, Language } from '../types';
import { translations } from '../constants';
import { generateQuotation } from '../utils/pdfGenerator';

interface ResultsSectionProps {
  data: CalculationData;
  lang: Language;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ data, lang }) => {
  const t = translations[lang];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
      {/* Normal Price Card */}
      <div className="bg-white dark:bg-brand-bgDarkSec rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 text-center">
            {t.titleNormal}
          </h3>
        </div>
        <div className="p-6 space-y-4 flex-grow text-gray-700 dark:text-gray-300">
          <div className="flex justify-between">
            <span>{t.baseCourse}:</span>
            <span className="font-mono">RM{data.normalBasePrice}</span>
          </div>
          <div className="flex justify-between">
            <span>{t.locationFee}:</span>
            <span className="font-mono">RM{data.locationFee}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t border-gray-200 dark:border-gray-600">
            <span>{t.subtotal}:</span>
            <span className="font-mono">RM{data.normalPricePerPerson}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{data.participants} &times; RM{data.normalPricePerPerson}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-4 border-t-2 border-gray-200 dark:border-gray-600">
            <span>{t.total}:</span>
            <span className="font-mono">RM{data.normalTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
           <h4 className="text-sm font-semibold mb-3 text-center text-gray-500 uppercase tracking-wide">{t.downloadNormalTitle}</h4>
           <button 
             onClick={() => generateQuotation('normal', 'docx', data, lang)}
             className="w-full py-3 rounded-lg border-2 border-brand-red text-brand-red font-bold hover:bg-brand-red hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
           >
             <span>📄</span> {t.btnNormalDocx}
           </button>
        </div>
      </div>

      {/* Discounted Price Card */}
      <div className="bg-white dark:bg-brand-bgDarkSec rounded-2xl shadow-lg overflow-hidden border-2 border-brand-red flex flex-col relative">
        <div className="absolute top-0 right-0 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-10">
          {data.tier.discountPercent}% OFF
        </div>
        <div className="p-6 border-b border-gray-100 dark:border-gray-700 bg-red-50 dark:bg-red-900/10">
          <h3 className="text-xl font-bold text-brand-red text-center">
            {t.titleDiscount}
          </h3>
        </div>
        <div className="p-6 space-y-4 flex-grow text-gray-700 dark:text-gray-300">
           <div className="flex justify-between">
            <span>{t.baseCourse}:</span>
            <span className="font-mono">RM{data.discountedBasePrice}</span>
          </div>
           <div className="flex justify-between text-brand-red font-medium">
            <span>{t.discount}:</span>
            <span className="font-mono">{data.tier.discountPercent}% OFF</span>
          </div>
          <div className="flex justify-between">
            <span>{t.locationFee}:</span>
            <span className="font-mono">RM{data.locationFee}</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t border-gray-200 dark:border-gray-600">
            <span>{t.subtotal}:</span>
            <span className="font-mono">RM{data.discountedPricePerPerson}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>{data.participants} &times; RM{data.discountedPricePerPerson}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-brand-red pt-4 border-t-2 border-gray-200 dark:border-gray-600">
            <span>{t.total}:</span>
            <span className="font-mono">RM{data.discountedTotal.toFixed(2)}</span>
          </div>
           {data.savings > 0 && (
            <div className="text-center text-sm font-medium text-green-600 bg-green-100 dark:bg-green-900/30 py-2 rounded-lg mt-2">
              You Save: RM{data.savings.toFixed(2)}
            </div>
           )}
        </div>
        <div className="p-6 bg-red-50 dark:bg-red-900/10 border-t border-gray-100 dark:border-gray-700">
           <h4 className="text-sm font-semibold mb-3 text-center text-brand-red uppercase tracking-wide">{t.downloadDiscountTitle}</h4>
           <button 
             onClick={() => generateQuotation('discount', 'docx', data, lang)}
             className="w-full py-3 rounded-lg bg-brand-red text-white font-bold hover:bg-brand-darkRed shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
           >
             <span>📄</span> {t.btnDiscountDocx}
           </button>
        </div>
      </div>
    </div>
  );
};