import { format } from 'date-fns';

export const formatDate = (date?: any): string => {
  if (!date) date = new Date();
  if (date instanceof Date) {
    return format(date as unknown as Date, 'yyyy-MM-dd');
  }
  const _date = new Date(date);

  return format(_date, 'yyyy-MM-dd');
};

export const formatDateTime = (date?: any): string => {
  if (!date) date = new Date();
  if (date instanceof Date) {
    return format(date as unknown as Date, 'yyyy-MM-dd HH:mm:ss');
  }
  const _date = new Date(date);

  return format(_date, 'yyyy-MM-dd HH:mm:ss');
};
