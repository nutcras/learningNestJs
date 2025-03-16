import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { Country } from './entity/country'; // Import Country entity
import { Province } from './entity/province'; // Import Province entity
import { District } from './entity/district'; // Import District entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Country, Province, District]), // Register repositories for injection
  ],
  controllers: [AddressController], // Register AddressController
  providers: [AddressService], // Register AddressService
  exports: [AddressService], // If you need to use AddressService in other modules
})
export class AddressModule {}
