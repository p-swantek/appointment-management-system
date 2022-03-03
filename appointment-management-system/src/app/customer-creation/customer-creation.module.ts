import { NgxsModule } from '@ngxs/store';
import { NgModule } from '@angular/core';

import { CustomerCreationRoutingModule } from './customer-creation-routing.module';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateCustomerComponent
  ],
  imports: [
    SharedModule,
    CustomerCreationRoutingModule,
    NgxsModule.forFeature([])
  ]
})
export class CustomerCreationModule { }
