import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);

export const formatDateToString = (date: Date, format: string = 'MM/dd', locale: string = 'es-ES'): string => {
  return formatDate(date, format, locale);
};

export const formatDateMonthYear = (date: Date): string => {
  return formatDateToString(date, 'MMMM yyyy');
}

export type DateFormatType = 'full' | 'month-year' | 'year' | 'range' | 'month';

export const formatDateByType = (date: Date | string, dateType: DateFormatType = 'full'): string => {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? new Date(date) : date;
  
  switch (dateType) {
    case 'month-year':
      return formatDateToString(parsedDate, 'MMMM yyyy');
    case 'year':
      return formatDateToString(parsedDate, 'yyyy');
    case 'month':
      return formatDateToString(parsedDate, 'MMMM');
    case 'range':
      return formatDateToString(parsedDate, 'dd/MM/yyyy');
    case 'full':
    default:
      return formatDateToString(parsedDate, 'dd/MM/yyyy HH:mm');
  }
}
