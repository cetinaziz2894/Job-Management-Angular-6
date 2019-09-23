import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../data.service";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
declare const showNotification : any;

@Component({
  selector: 'app-accuraltrigger',
  templateUrl: './accuraltrigger.component.html',
  styleUrls: ['./accuraltrigger.component.css']
})
export class AccuraltriggerComponent implements OnInit {
  
  events: any;
  minYesterdayDate : any;
  minMonthDate:any;
  maxDate : any;
  maxMonthDate : any;
  logHistory  = [];
  selectedJobname:any;
  urlPage:string;
  loading: boolean;


  runJobForm : FormGroup;
  runSubmitted = false;
  postCallIsSubmitted = false;

  constructor(private httpClient : HttpClient,private data: DataService, private formBuilder : FormBuilder) { }

  setMinDate(event: MatDatepickerInputEvent<Date>) {
    this.events = new Date(`${event.value}`);
    this.minYesterdayDate = this.events;
    this.maxDate = this.events;
    //console.log(this.minDate);
    //console.log(this.events);
  }

  setMonthMinDate(event: MatDatepickerInputEvent<Date>) {
    this.events = new Date(`${event.value}`);
    this.minMonthDate = this.events;
    this.maxMonthDate = this.events;
    //console.log(this.events);
  }


  /*
  setMaxDate(event: MatDatepickerInputEvent<Date>){
    this.events = new Date(`${event.value}`);
    this.maxDate = this.events;
    //console.log(this.maxDate);
    //console.log(this.events);
  }
  */

  ngOnInit() {
    this.urlPage='http://83.66.131.71:1453/api/schedules';
    this.runJobForm = this.formBuilder.group({
      selectedJobname : ['', Validators.required],
      yesterdayStartDate :['', Validators.required],
      yesterdayEndDate :['', Validators.required],
      thisMonthStartDate :['', Validators.required],
      thisMonthEndDate :['', Validators.required],
      isDeveloperTest :[false],
    });
    
    this.getJobDetail();
  }

  onSubmit() {
    this.runSubmitted = true;
    if(
       this.runJobForm.value.selectedJobname == "" ||
       !this.runJobForm.value.yesterdayEndDate || !this.runJobForm.value.yesterdayStartDate || !this.runJobForm.value.thisMonthStartDate || !this.runJobForm.value.thisMonthEndDate){
      showNotification('top','right', 'danger', 'Failed.');
      return;
    }
    else {
      this.runJobForm.value.selectedJobname = this.selectedJobname;
      this.runJobForm.value.yesterdayEndDate =this.getEndDate(this.runJobForm.value.yesterdayEndDate);
      this.runJobForm.value.yesterdayStartDate =this.getStartDate(this.runJobForm.value.yesterdayStartDate);
      this.runJobForm.value.thisMonthEndDate =this.getEndDate(this.runJobForm.value.thisMonthEndDate);
      this.runJobForm.value.thisMonthStartDate =this.getStartDate(this.runJobForm.value.thisMonthStartDate);
      console.log(this.runJobForm.value);
      this.httpPostAccuralCall(this.runJobForm.value);
      //console.log(this.runJobForm);
    }
  }

  
  getEndDate(item){
    var d = new Date();
     var n = d.getTimezoneOffset()*60*1000;
     item.setDate(item.getDate()+1);
     var convertDate =item.setTime(item.getTime()-(1000*60+n));
     //console.log(item);
     var formattedTime = new Date(convertDate);
     return formattedTime;
   }
 
   getStartDate(item){
     var d = new Date();
     var n = d.getTimezoneOffset()*60*1000;
     var convertDate =item.setTime(item.getTime()-(n));
     var formattedTime = new Date(convertDate);
     //console.log(formattedTime);
     return formattedTime;
   }

  httpPostAccuralCall(item){
    this.httpClient.post("http://83.66.131.71:1453/api/triggers/manuel",
    {
      "scheduleName": item.selectedJobname,
      "yesterdayStartDate": item.yesterdayStartDate,
      "yesterdayEndDate": item.yesterdayEndDate,
      "thisMonthStartDate": item.thisMonthStartDate,
      "thisMonthEndDate": item.thisMonthEndDate,
      "isDeveloperTest": item.isDeveloperTest,
    })
    .subscribe(
      (val) => {
          this.postCallIsSubmitted = true;
          console.log("POST call successful value returned in body",val);
      },
      response => {
          console.log("Fail", response);
          showNotification('top','right', 'danger', 'Failed.');
      },
      () => {
          console.log("Success.");   
          showNotification('top','right', 'success', 'Success.');
      });
  }


  getJobDetail(){
    this.loading = true;
    this.httpClient.get(this.urlPage).subscribe((res : any []) =>{
      this.logHistory =res;
      this.loading = false;
      //console.log(this.logHistory);
    });
  }

}
