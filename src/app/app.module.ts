import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { NavsidebarComponent } from './navsidebar/navsidebar.component';
import { RouterModule} from '@angular/router';
import { AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { HttpClientModule} from '@angular/common/http';
import { LogsComponent } from './logs/logs.component';
import { HistoriesComponent } from './histories/histories.component';
import { AdxModule} from './adx/adx.module';
import { AccuralModule } from './accural/accural.module';
import { ReservationModule } from './reservation/reservation.module';
import { ScreenshotModule } from './screenshot/screenshot.module';
import { CustomerModule } from './customer/customer.module';
import { AdunitModule } from './adunit/adunit.module';
import { LoglistModule } from './loglist/loglist.module';
import { CampaignModule } from './campaign/campaign.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    NavsidebarComponent,
    LogsComponent,
    HistoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AdxModule,
    AccuralModule,
    ReservationModule,
    ScreenshotModule,
    CustomerModule,
    AdunitModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoglistModule,
    NgxJsonViewerModule,
    CampaignModule,
    RouterModule.forRoot([
      { path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      },
      {
         path: 'jobs',
         component: JobsComponent
      },
      {
        path: 'jobs/histories/:jobname',
        component: HistoriesComponent
      },
      {
        path: 'jobs/histories/:jobname/:id/logs',
        component: LogsComponent
      },
      {
        path: 'jobs/adx',
        loadChildren: () => import('./adx/adx.module').then(mod => mod.AdxModule)
      },
      {
        path: 'jobs/accural',
        loadChildren: () => import('./accural/accural.module').then(mod => mod.AccuralModule)
      },
      {
        path: 'jobs/reservation',
        loadChildren: () => import('./reservation/reservation.module').then(mod => mod.ReservationModule)
      },
      {
        path: 'jobs/campaign',
        loadChildren: () => import('./campaign/campaign.module').then(mod => mod.CampaignModule)
      },
      {
        path: 'jobs/screenshot',
        loadChildren: () => import('./screenshot/screenshot.module').then(mod => mod.ScreenshotModule)
      },
      {
        path: 'jobs/customer',
        loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule)
      },
      {
        path: 'jobs/adunitsync',
        loadChildren: () => import('./adunit/adunit.module').then(mod => mod.AdunitModule)
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
