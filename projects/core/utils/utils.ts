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



