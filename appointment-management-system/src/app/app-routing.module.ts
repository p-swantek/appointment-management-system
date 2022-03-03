import { CreateCustomerComponent } from './customer-creation/components/create-customer/create-customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'customer/new',
    loadChildren: () => import('./customer-creation/customer-creation.module').then(mod => mod.CustomerCreationModule)
  },
  {
    path: '**',
    redirectTo: 'customer/new'

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
