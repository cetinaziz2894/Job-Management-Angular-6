import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdxtriggerComponent } from './adxtrigger/adxtrigger.component';
import { AdxdetailComponent } from './adxdetail/adxdetail.component';
import { AdxComponent } from './adx/adx.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
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
        path: 'jobs/adx/trigger',
        component: AdxtriggerComponent
      },
      {
        path: 'jobs/adx/detail',
        component: AdxdetailComponent
      },
    ]),
  ],
  declarations: [
    AdxtriggerComponent,
    AdxdetailComponent,
    AdxComponent],
  exports: [
    AdxtriggerComponent,
    AdxdetailComponent,
    AdxComponent
    
  ]
})
export class AdxModule { }
