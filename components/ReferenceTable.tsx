import React from 'react';
import { DISCOUNT_TIERS, translations } from '../constants';
import { Language } from '../types';

interface ReferenceTableProps {
  lang: Language;
}

export const ReferenceTable: React.FC<ReferenceTableProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="mt-12 bg-white dark:bg-brand-bgDarkSec p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-center mb-6 text-brand-red">
        {t.formulaTitle}
      </h3>

      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-600">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-white uppercase bg-brand-red">
            <tr>
              <th scope="col" className="px-6 py-4 text-center border-r border-red-400">{t.tableHeaders.participants}</th>
              <th scope="col" className="px-6 py-4 text-center border-r border-red-400">{t.tableHeaders.discount}</th>
              <th scope="col" className="px-6 py-4 text-center border-r border-red-400">{t.tableHeaders.formula}</th>
              <th scope="col" className="px-6 py-4 text-center border-r border-red-400">{t.tableHeaders.asas}</th>
              <th scope="col" className="px-6 py-4 text-center">{t.tableHeaders.lengkap}</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-300">
            {DISCOUNT_TIERS.map((tier, index) => {
              const participantsText = tier.max > 100 ? `${tier.min} & more` : (tier.min === tier.max ? `${tier.min}` : `${tier.min}-${tier.max}`);
              
              // Apply requested animations and styles
              let rowClass = "border-b border-gray-200 dark:border-gray-600 ";
              if (index % 2 !== 0) {
                 rowClass += "bg-gray-50 dark:bg-gray-800 ";
              } else {
                 rowClass += "bg-white dark:bg-brand-bgDarkSec ";
              }

              if (tier.style === 'blue') {
                rowClass += " animate-glow-blue border-2 border-blue-400 dark:border-blue-500 z-10 relative";
              } else if (tier.style === 'red') {
                rowClass += " animate-glow-red border-2 border-brand-red dark:border-red-500 z-10 relative";
              }

              return (
                <tr key={index} className={rowClass}>
                  <td className="px-6 py-4 text-center border-r border-gray-200 dark:border-gray-600 font-bold relative">
                    {participantsText}
                    {tier.label && (
                      <span className={`absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full text-white shadow-sm whitespace-nowrap ${tier.style === 'red' ? 'bg-red-600' : 'bg-blue-500'}`}>
                        {tier.label}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center border-r border-gray-200 dark:border-gray-600 font-medium text-brand-red">
                    <span className={tier.style === 'red' ? 'animate-text-glow-red font-bold text-red-500 dark:text-red-400' : ''}>
                      {tier.discountPercent}%
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center border-r border-gray-200 dark:border-gray-600 font-mono text-xs md:text-sm">
                    250 &times; {(1 - tier.discountPercent / 100).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 text-center border-r border-gray-200 dark:border-gray-600">
                    RM{tier.asasPrice}{tier.discountPercent > 0 ? '*' : ''}
                  </td>
                  <td className="px-6 py-4 text-center">
                    RM{tier.lengkapPrice}{tier.discountPercent > 0 ? '*' : ''}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-center text-gray-500 dark:text-gray-400 font-medium tracking-wide">
        {t.footerNote}
      </p>
    </div>
  );
};