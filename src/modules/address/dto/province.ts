import { District } from './district';

export interface Province {
  id: number;
  name: string;
  capital: string;
  population: number;
  countryId?: number;
  districts?: District[];
}
