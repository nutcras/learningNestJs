import { Controller, Get, Param } from '@nestjs/common';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly address: AddressService) {}

  @Get('country')
  getCountry() {
    // Logic to get country
    return this.address.getCountries();
  }

  @Get('province/:countryId')
  getProvince(@Param('countryId') countryId: string) {
    // Logic to get province by countryId
    return this.address.getProvincesByCountryId(parseInt(countryId));
  }

  @Get('district/:provinceId')
  getDistrict(@Param('provinceId') provinceId: string) {
    // Logic to get district by provinceId
    return this.address.getDistrictsByProvinceId(parseInt(provinceId));
  }
}
