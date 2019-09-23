import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from "../data.service";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  itemDetails =[];
  item: {};
  subscription: Subscription;
  loading: boolean;
  historyId: string;
  jobName: string;
  dataDialog:any;
  
  constructor(private data: DataService,private httpClient : HttpClient,private route: ActivatedRoute) { }

  ngOnInit() { 
    //this.urlId =window.location.pathname.split("/").pop();
    this.jobName = this.route.snapshot.paramMap.get("jobname");
    this.historyId = this.route.snapshot.paramMap.get("id");
    this.getItemhistory();
  }

  getItemhistory(){ 
    this.loading = true; 
    const url = "http://83.66.131.71:1299/api/logs/jobIds/"+this.historyId;
    this.httpClient.get(url).subscribe((res : any[])=>{
        this.itemDetails = res;
        //console.log(this.itemDetails);
        this.loading = false;
        return this.itemDetails;
    });
  }

  checkLength(){
    if (typeof this.itemDetails === 'undefined' || this.itemDetails.length <= 0) {
      return false;
    }
    else return true;
  }

  openDialog(item) {
    this.dataDialog = item;
    //console.log(item);
 }

}