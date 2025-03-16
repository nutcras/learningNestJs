import { Province } from './province';

export interface Country {
  id: number;
  name: string;
  population: number;
  provinces?: Province[];
}
