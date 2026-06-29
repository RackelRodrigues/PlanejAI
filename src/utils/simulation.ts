import type { SimulationFormData } from '../data/simulation';
import { parseCurrency } from './currency';

export function calcMonthSaving(data: SimulationFormData) {
  return parseCurrency(data.income) - parseCurrency(data.expenses) - parseCurrency(data.debts);
}
