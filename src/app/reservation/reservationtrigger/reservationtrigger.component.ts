import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../data.service";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
declare const showNotification : any;

@Component({
  selector: 'app-reservationtrigger',
  templateUrl: './reservationtrigger.component.html',
  styleUrls: ['./reservationtrigger.component.css']
})
export class ReservationtriggerComponent implements OnInit {
 
  events: any;
  minDate : any;
  maxDate : any;

  runJobForm : FormGroup;
  runSubmitted = false;
  postCallIsSubmitted = false;
  logHistory  = [];
  selectedJobname:any;
  urlPage:string;
  loading: boolean;

  constructor( private httpClient : HttpClient, private data: DataService, private formBuilder: FormBuilder ) {}

  setMinDate(event: MatDatepickerInputEvent<Date>) {
    this.events = new Date(`${event.value}`);
    this.minDate = this.events;
    this.maxDate = this.events;
    //console.log(this.minDate);
    //console.log(this.events);
  }

  /*setMaxDate(event: MatDatepickerInputEvent<Date>){
    this.events = new Date(`${event.value}`);
    this.maxDate = this.events;
    //console.log(this.maxDate);
    //console.log(this.events);
  }*/

  ngOnInit() {
    this.urlPage='http://83.66.131.71:1915/api/schedules';

    this.runJobForm= this.formBuilder.group({
      startDate:['', Validators.required],
      endDate : ['', Validators.required],
      selectedJobname : ['', Validators.required],
      isDeveloperTest:[false]
    });

    this.getJobDetail();

  }



  onSubmit() {
    this.runSubmitted = true;
    if (!this.runJobForm.value.startDate ||!this.runJobForm.value.endDate || this.runJobForm.value.selectedJobname == "") {
        showNotification('top','right', 'danger', 'Failed.');
        return;
    }
    else{
      this.runJobForm.value.endDate =this.getEndDate(this.runJobForm.value.endDate);
      this.runJobForm.value.startDate =this.getStartDate(this.runJobForm.value.startDate);
      this.runJobForm.value.selectedJobname = this.selectedJobname;
      this.httpPostADXCall(this.runJobForm.value);
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


  httpPostADXCall(item) {
    this.httpClient.post("http://83.66.131.71:1915/api/triggers/manuel",
      {
        "scheduleName": item.selectedJobname,
        "startDate": item.startDate,
        "endDate": item.endDate,
        "isImportable": item.isImportable,
        "isDeveloperTest": item.isDeveloperTest
      })
      .subscribe(
        (val) => {
            this.postCallIsSubmitted = true;
            //console.log("POST call successful value returned in body",val);
        },
        response => {
            //console.log("Fail", response);
            showNotification('top','right', 'danger', 'Failed.');
        },
        () => {
            //console.log("Success.");   
            showNotification('top','right', 'success', 'Success');
        });
    }

    getJobDetail(){
      this.loading = true;
      this.httpClient.get(this.urlPage).subscribe((res : any []) =>{
        this.logHistory =res;
        this.loading = false;
        ////console.log(this.logHistory);
      });
    }

}
