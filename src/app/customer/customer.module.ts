import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { CustomertriggerComponent } from './customertrigger/customertrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomerComponent, CustomerdetailComponent, CustomertriggerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
        path: 'jobs/customersync/trigger',
        component: CustomertriggerComponent
      },
      {
        path: 'jobs/customersync/detail',
        component: CustomerdetailComponent
      },
    ]),
  ],
  exports:[
    CustomerComponent,
    CustomerdetailComponent,
    CustomertriggerComponent
  ]
})
export class CustomerModule { }
