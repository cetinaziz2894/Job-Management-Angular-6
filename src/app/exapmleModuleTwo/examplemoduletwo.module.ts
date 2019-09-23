import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailtwoComponent } from './detailtwo/detailtwo.component';
import { TriggertwoComponent } from './triggertwo/triggertwo.component';
import { GeneraltwoComponent } from './generaltwo/generaltwo.component';


@NgModule({
    declarations: [DetailtwoComponent, TriggertwoComponent, GeneraltwoComponent],
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
          component: TriggertwoComponent
        },
        {
          path: 'jobs/exampletwo/detail',
          component: DetailtwoComponent
        },
      ]),
    ],
    exports:[
        GeneraltwoComponent,
        DetailtwoComponent,
        TriggertwoComponent
    ]
  })
  export class ExamplemoduletwoModule { }
  