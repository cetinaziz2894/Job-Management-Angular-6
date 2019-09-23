import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationdetailComponent } from './reservationdetail/reservationdetail.component';
import { ReservationtriggerComponent } from './reservationtrigger/reservationtrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationComponent, ReservationdetailComponent, ReservationtriggerComponent],
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
        path: 'jobs/reservation/trigger',
        component: ReservationtriggerComponent
      },
      {
        path: 'jobs/reservation/detail',
        component: ReservationdetailComponent
      },
    ]),
  ],
  exports:[
    ReservationComponent,
    ReservationdetailComponent,
    ReservationtriggerComponent
  ]
})
export class ReservationModule { }
