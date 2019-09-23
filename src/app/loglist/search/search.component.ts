import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInfoResults = [];
  searchWarningResults = [];
  searchErrorResults = [];
  searchInfoUrl:any;
  searchWarningUrl:any;
  searchErorUrl:any;
  pageName:string;
  isInformationEmptyCheck: boolean;
  isWarningEmptyCheck:boolean;
  isErrorEmptyCheck :boolean;
  dataDialog:any;

  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.isInformationEmptyCheck = true;
    this.isWarningEmptyCheck = true;
    this.isErrorEmptyCheck = true;
    this.pageName= "Logs";
    this.searchInfoUrl = "http://83.66.131.71:1299/api/logs/levels/information";
    this.searchWarningUrl = "http://83.66.131.71:1299/api/logs/levels/warning";
    this.searchErorUrl = "http://83.66.131.71:1299/api/logs/levels/error";
    this.getInformationLogs(this.searchInfoUrl);
  }

  openDialog(item) {
     this.dataDialog = item;
     //console.log(item);
  }

  getInformationLogs(item){
    this.searchInfoResults = [];
    this.httpClient.get(item).subscribe((res : any []) =>{
      this.searchInfoResults =res;
      //console.log(this.searchInfoResults);
      if (typeof this.searchInfoResults === 'undefined' || this.searchInfoResults.length <= 0) {
        return this.isInformationEmptyCheck = false;
      }
      else return this.isInformationEmptyCheck= true;
    }
    );
  }

  getWarningLogs(item){
    this.searchWarningResults = [];
    this.httpClient.get(item).subscribe((res : any []) =>{
      this.searchWarningResults =res;
      //console.log(this.searchWarningResults);
      if (typeof this.searchWarningResults === 'undefined' || this.searchWarningResults.length <= 0) {
        return this.isWarningEmptyCheck = false;
      }
      else return this.isWarningEmptyCheck= true;
    }
    );
  }

  getErrosLogs(item){
    this.searchErrorResults = [];
    this.httpClient.get(item).subscribe((res : any []) =>{
      this.searchErrorResults =res;
      //console.log(this.searchErrorResults);
      if (typeof this.searchErrorResults === 'undefined' || this.searchErrorResults.length <= 0) {
        return this.isErrorEmptyCheck = false;
      }
      else return this.isErrorEmptyCheck= true;
    }
    );
  }

}

