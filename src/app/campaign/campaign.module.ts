import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaigndetailComponent } from './campaigndetail/campaigndetail.component';
import { CampaigntriggerComponent } from './campaigntrigger/campaigntrigger.component';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CampaignComponent, CampaigndetailComponent, CampaigntriggerComponent],
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
        path: 'jobs/campaign/trigger',
        component: CampaigntriggerComponent
      },
      {
        path: 'jobs/campaign/detail',
        component: CampaigndetailComponent
      }
    ]),
  ],
  exports:[
    CampaignComponent,
    CampaigndetailComponent,
    CampaigntriggerComponent
  ]
})
export class CampaignModule { }
