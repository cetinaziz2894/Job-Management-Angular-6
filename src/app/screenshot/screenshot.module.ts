import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenshotComponent } from './screenshot/screenshot.component';
import { ScreenshotdetailComponent } from './screenshotdetail/screenshotdetail.component';
import { ScreenshottriggerComponent } from './screenshottrigger/screenshottrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScreenshotComponent, ScreenshotdetailComponent, ScreenshottriggerComponent],
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
        path: 'jobs/screenshot/trigger',
        component: ScreenshottriggerComponent
      },
      {
        path: 'jobs/screenshot/detail',
        component: ScreenshotdetailComponent
      },
    ]),
  ],
  exports:[
    ScreenshotComponent,
    ScreenshotdetailComponent,
    ScreenshottriggerComponent
  ]
})
export class ScreenshotModule { }
