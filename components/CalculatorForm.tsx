import React from 'react';
import { CourseType, LocationType, Language } from '../types';
import { translations } from '../constants';

interface CalculatorFormProps {
  lang: Language;
  courseType: CourseType;
  setCourseType: (val: CourseType) => void;
  location: LocationType;
  setLocation: (val: LocationType) => void;
  participants: number;
  setParticipants: (val: number) => void;
  onCalculate: () => void;
}

export const CalculatorForm: React.FC<CalculatorFormProps> = ({
  lang,
  courseType,
  setCourseType,
  location,
  setLocation,
  participants,
  setParticipants,
  onCalculate
}) => {
  const t = translations[lang];

  return (
    <div className="bg-white dark:bg-brand-bgDarkSec p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
      <div className="space-y-6">
        {/* Course Type */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">
            {t.labelCourse}
          </label>
          <div className="relative">
            <select
              value={courseType}
              onChange={(e) => setCourseType(e.target.value as CourseType)}
              className="w-full p-4 pl-4 pr-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-brand-red focus:ring-0 text-gray-900 dark:text-white transition-all appearance-none"
            >
              <option value="">{t.courseOptions.select}</option>
              <option value="asas">{t.courseOptions.asas}</option>
              <option value="lengkap">{t.courseOptions.lengkap}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">
            {t.labelLocation}
          </label>
          <div className="relative">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value as LocationType)}
              className="w-full p-4 pl-4 pr-10 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-brand-red focus:ring-0 text-gray-900 dark:text-white transition-all appearance-none"
            >
              <option value="">{t.locationOptions.select}</option>
              <option value="kt">{t.locationOptions.kt}</option>
              <option value="seremban">{t.locationOptions.seremban}</option>
              <option value="onsite">{t.locationOptions.onsite}</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="space-y-2">
          <label className="block text-sm font-bold text-gray-700 dark:text-gray-200">
            {t.labelParticipants}
          </label>
          <input
            type="number"
            min="1"
            max="25"
            value={participants}
            onChange={(e) => setParticipants(parseInt(e.target.value) || 0)}
            className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-brand-red focus:ring-0 text-gray-900 dark:text-white transition-all"
          />
        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={onCalculate}
            className="px-8 py-4 bg-brand-red hover:bg-brand-darkRed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg w-full md:w-auto min-w-[200px]"
          >
            {t.btnCalculate}
          </button>
        </div>
      </div>
    </div>
  );
};