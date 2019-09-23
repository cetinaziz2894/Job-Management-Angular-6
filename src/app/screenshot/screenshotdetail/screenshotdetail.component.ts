import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";
declare const showNotification : any;
declare var $: any 

@Component({
  selector: 'app-screenshotdetail',
  templateUrl: './screenshotdetail.component.html',
  styleUrls: ['./screenshotdetail.component.css']
})


export class ScreenshotdetailComponent implements OnInit {


  constructor(private httpClient : HttpClient, private data: DataService,private route: ActivatedRoute) { }
  
  logHistory  = [];
  page: {};
  url:string;
  urlPage:string;
  loading: boolean;
  jobName: string;
  scheduleTriggerUrl: string;
  scheduleName:string;
  showTriggerResult:number;
  postCallIsSubmitted = false;

  ngOnInit() {
    this.jobName = "Screenshot";
    this.urlPage='http://83.66.131.71:1917/api/schedules';
    this.scheduleTriggerUrl= 'http://83.66.131.71:1917/api/triggers/schedule';
    this.getJobDetail();
  }


  getJobDetail(){
    this.loading = true;
    this.httpClient.get(this.urlPage).subscribe((res : any []) =>{
      this.logHistory =res;
      this.loading = false;
    });
  }



  checkLength(){
    if (typeof this.logHistory === 'undefined' || this.logHistory.length <= 0) {
      return false;
    }
    else return true;
  }

  triggerJob(item){
    console.log(item);
    this.httpClient.post(this.scheduleTriggerUrl,
      {
        "scheduleName": item,
      }) .subscribe(
        (val) => {
            this.postCallIsSubmitted = true;
            console.log("POST call successful value returned in body",val);
            $('#triggerModal').modal('hide');
        },
        response => {
            console.log("Fail", response);
            showNotification('top','right', 'danger', 'Failed.');
            $('#triggerModal').modal('hide');
        },
        () => {
            console.log("Success.");   
            showNotification('top','right', 'success', 'Success');
            $('#triggerModal').modal('hide');
        });
    }

  setScheduleName(item){
    this.scheduleName = item;
    console.log(this.scheduleName);
  }

  

}

