import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailthreeComponent } from './detailthree/detailthree.component';
import { TriggerthreeComponent } from './triggerthree/triggerthree.component';
import { GeneralthreeComponent } from './generalthree/generalthree.component';

@NgModule({
  declarations: [GeneralthreeComponent, TriggerthreeComponent, DetailthreeComponent ],
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
          path: 'jobs/exampletwo/trigger',
          component: TriggerthreeComponent
        },
        {
          path: 'jobs/exampletwo/detail',
          component: DetailthreeComponent
        },
      ]),
    ],
    exports:[
      GeneralthreeComponent,
        TriggerthreeComponent,
      DetailthreeComponent
    ]
})
export class ExapmleModulethreeModule { }
