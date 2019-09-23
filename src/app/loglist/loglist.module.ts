import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'logs',
        pathMatch: 'full'
      },
      {
        path: 'logs',
        component: SearchComponent
      }
    ]),
  ],
  exports:[
    SearchComponent    
  ]
})
export class LoglistModule { }
