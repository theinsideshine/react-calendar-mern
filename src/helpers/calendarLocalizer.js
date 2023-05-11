import {dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay} from 'date-fns';
import enES from 'date-fns/locale/es';


const locales = {
  'es': enES,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});