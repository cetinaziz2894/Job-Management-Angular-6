import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  constructor(private httpClient : HttpClient, private data: DataService,private route: ActivatedRoute) { }
  
  logHistory  = [];
  page: {};
  url:string;
  loading: boolean;
  //jobName: string;
  ngOnInit() {
    //this.urlName = window.location.pathname.split("/").slice(-1)[0];
    //this.jobName = this.route.snapshot.paramMap.get("jobname");
    //console.log(this.jobName);
    this.getPage();
    this.getHistory();
  }

  getHistory(){
    this.loading = true;
    this.httpClient.get(this.url).subscribe((res : any []) =>{
      this.logHistory =res;
      this.loading = false;
    });
  }

  getPage(){
    this.url = "https://35fa1270-24b7-4f55-9c43-facb202c79c6.mock.pstmn.io/api/histories";
    //console.log(this.url);
    //console.log(this.page);
  }

  checkLength(){
    if (typeof this.logHistory === 'undefined' || this.logHistory.length <= 0) {
      return false;
    }
    else return true;
  }


}
