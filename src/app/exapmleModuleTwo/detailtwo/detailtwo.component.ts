import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../data.service";
import { ActivatedRoute } from "@angular/router";
declare const showNotification : any;
declare var $: any 
@Component({
  selector: 'app-detailtwo',
  templateUrl: './detailtwo.component.html',
  styleUrls: ['./detailtwo.component.css']
})
export class DetailtwoComponent implements OnInit {

  constructor(private httpClient : HttpClient, private data: DataService, private route: ActivatedRoute) { }
  
  logHistory  = [];
  page: {};
  url:string;
  urlPage:string;
  loading: boolean;
  jobName: string;
  scheduleTriggerUrl:string;  
  scheduleName:string;
  showTriggerResult:number;
  postCallIsSubmitted = false;

  ngOnInit() {
    this.jobName = "Exapmle";
    this.urlPage='https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/schedules';
    this.scheduleTriggerUrl= 'https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/api/triggers/schedule';
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
            $('#triggerModalExample').modal('hide');
        },
        response => {
          if(response.status === 200 ){
            console.log("Success.");   
            showNotification('top','right', 'success', 'Success');
            $('#triggerModalExample').modal('hide');
          }
          else {
            console.log("Fail", response);
            showNotification('top','right', 'danger', 'Failed.');
            $('#triggerModalExample').modal('hide');
          }
        },
        () => {
            console.log("Success.");   
            showNotification('top','right', 'success', 'Success');
            $('#triggerModalExample').modal('hide');
        });
    }

  setScheduleName(item){
    this.scheduleName = item;
    console.log(this.scheduleName);
  }

}