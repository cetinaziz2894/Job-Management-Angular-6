import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../../data.service";
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
declare const showNotification : any;

@Component({
  selector: 'app-triggertwo',
  templateUrl: './triggertwo.component.html',
  styleUrls: ['./triggertwo.component.css']
})
export class TriggertwoComponent implements OnInit {
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


  ngOnInit() {
    this.urlPage='https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/schedules';

    this.runJobForm= this.formBuilder.group({
      startDate:['', Validators.required],
      endDate : ['', Validators.required],
      isImportable:[false],
      isDeveloperTest:[false],
      selectedJobname : ['', Validators.required],
    });

    this.getJobDetail();

  }



  onSubmit() {
    this.runSubmitted = true;
    // stop here if form is invalid
    if (this.runJobForm.value.selectedJobname == "" ||  !this.runJobForm.value.startDate ||!this.runJobForm.value.endDate) {
        showNotification('top','right', 'danger', 'Failed.');
        return;
    }
    else{
      this.runJobForm.value.endDate =this.getEndDate(this.runJobForm.value.endDate);
      this.runJobForm.value.startDate =this.getStartDate(this.runJobForm.value.startDate);
      this.runJobForm.value.selectedJobname = this.selectedJobname;
      this.httpPostJobsCall(this.runJobForm.value);
      console.log(this.runJobForm); 
    }
  }


  getEndDate(item){
    var d = new Date();
    var n = d.getTimezoneOffset()*60*1000;
    item.setDate(item.getDate()+1);
    var convertDate =item.setTime(item.getTime()-(1000*60+n));
    console.log(item);
    var formattedTime = new Date(convertDate);
    return formattedTime;
   }
 
   getStartDate(item){
     var d = new Date();
     var n = d.getTimezoneOffset()*60*1000;
     var convertDate =item.setTime(item.getTime()-(n));
     var formattedTime = new Date(convertDate);
     console.log(formattedTime);
     return formattedTime;
   }


   httpPostJobsCall(item) {
    this.urlPage='https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/schedules';
    this.httpClient.post("https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/api/triggers/manuel",
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
            console.log("POST call successful value returned in body",val);
        },
        response => {
          if(response.status === 200) {
            console.log("Success.");   
            showNotification('top','right', 'success', 'Success.');
          }
          else {
            console.log("Fail", response);
            showNotification('top','right', 'danger', 'Failed.');
          }
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
