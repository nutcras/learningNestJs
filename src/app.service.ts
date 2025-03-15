import { Injectable } from '@nestjs/common';
import { Province } from './interface/province.interface';
import * as provinceJson from '../json/province.json';

@Injectable()
export class AppService {
  private readonly provinceData: { provinces: Province[] };

  constructor() {
    this.provinceData = provinceJson as { provinces: Province[] };
  }

  getProvince(): Province[] {
    const data = this.provinceData.provinces ?? [];
    return data
      .filter((province) => province.population > 500000)
      .map(({ id, name, population, capital }) => ({
        id,
        name: `${id} - ${name}`,
        population: population * 0.5,
        capital,
      }));
  }
}
