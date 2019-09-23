import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdunitComponent } from './adunit/adunit.component';
import { AdunitdetailComponent } from './adunitdetail/adunitdetail.component';
import { AdunittriggerComponent } from './adunittrigger/adunittrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdunitComponent, AdunitdetailComponent, AdunittriggerComponent],
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
        path: 'jobs/adunitsync/trigger',
        component: AdunittriggerComponent
      },
      {
        path: 'jobs/adunitsync/detail',
        component: AdunitdetailComponent
      },
    ]),
  ],
  exports:[
    AdunitComponent,
    AdunitdetailComponent,
    AdunittriggerComponent
  ]
})
export class AdunitModule { }
