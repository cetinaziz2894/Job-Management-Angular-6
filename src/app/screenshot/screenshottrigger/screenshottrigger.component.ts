import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DataService } from "../../data.service";
declare const showNotification : any;


@Component({
  selector: 'app-screenshottrigger',
  templateUrl: './screenshottrigger.component.html',
  styleUrls: ['./screenshottrigger.component.css']
})
export class ScreenshottriggerComponent implements OnInit {

  runJobForm : FormGroup;
  runSubmitted = false;
  postCallIsSubmitted = false;  
  logHistory  = [];
  selectedJobname:any;
  urlPage:string;
  loading: boolean;

  constructor(private httpClient : HttpClient,private data: DataService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.urlPage='http://83.66.131.71:1917/api/schedules';

    this.runJobForm = this.formBuilder.group({
      selectedJobname : ['', Validators.required],
      isDeveloperTest :[false],
    })
    this.getJobDetail();
  }

  call(){
    console.log("deneme");
  }

  onSubmit() {
    this.runSubmitted = true;
    if(
      this.runJobForm.value.selectedJobname == ""){
      showNotification('top','right', 'danger', 'Failed.');
      return;
    }
    else {
      this.runJobForm.value.selectedJobname = this.selectedJobname;
      this.httpPostScreenshotCall(this.runJobForm.value);
      //console.log(this.runJobForm);
    }
  }
  

  httpPostScreenshotCall(item){
    this.httpClient.post("http://83.66.131.71:1917/api/triggers/manuel",
    {
        "scheduleName": item.selectedJobname,
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
            showNotification('top','right', 'success', 'Success');
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
