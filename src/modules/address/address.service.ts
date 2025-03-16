import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from './entity/country';
import { Province } from './entity/province';
import { District } from './entity/district';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Country) // Inject Repository สำหรับ Entity Country
    private readonly countryRepository: Repository<Country>,

    @InjectRepository(Province) // Inject Repository สำหรับ Entity Province
    private readonly provinceRepository: Repository<Province>,

    @InjectRepository(District) // Inject Repository สำหรับ Entity District
    private readonly districtRepository: Repository<District>,
  ) {}

  async getCountries() {
    return await this.countryRepository.find();
  }

  async getProvincesByCountryId(countryId: number) {
    return await this.provinceRepository.find({
      where: { countryId },
    });
  }

  async getDistrictsByProvinceId(provinceId: number) {
    return await this.districtRepository.find({
      where: { provinceId },
    });
  }
}
