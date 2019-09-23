import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccuralComponent } from './accural/accural.component';
import { AccuraldetailComponent } from './accuraldetail/accuraldetail.component';
import { AccuraltriggerComponent } from './accuraltrigger/accuraltrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccuralComponent, AccuraldetailComponent, AccuraltriggerComponent],
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
        path: 'jobs/accural/trigger',
        component: AccuraltriggerComponent
      },
      {
        path: 'jobs/accural/detail',
        component: AccuraldetailComponent
      },
    ]),
  ],
  exports:[
    AccuralComponent,
    AccuraldetailComponent,
    AccuraltriggerComponent
  ]
})
export class AccuralModule { }
