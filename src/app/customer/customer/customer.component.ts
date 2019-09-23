import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/dist/chart';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  LineChart:any;
  LastHistoriesInfo:{};

  components  = [
    {
      name: "CUSTOMERSYNC",
      jobname:"CUSTOMER SYNC",
      icon: "person_add",
      routeTrigger:"trigger",
      routeHistory:"histories",
      cardClass:"card-header-warning",
      cardIconClass:"card-header-light-purple",
      serviceCallName:"customersyncjob",
      healthyUrl:"http://83.66.131.71:1918/healthcheck",
      routeDetailUrl:"http://83.66.131.71:1918/api/schedules",
      statisticUrl:"http://83.66.131.71:1299/api/jobs/customersyncjob/statistics",
      historiesLast:"http://83.66.131.71:1299/api/jobs/customersyncjob/histories/last",
      routeDetail:"detail"}
  ];

  @Input() component;
  constructor(private httpClient : HttpClient) {}
  isHealthy : boolean;
  statics:[];
  labels:[];
  series:[];
  message : any;
  objectKeys;

  ngOnInit() {
    this.checkJobHealty(this.components[0].healthyUrl);
    this.getStatistics(this.components[0].statisticUrl);
    this.getHistoriesLast(this.components[0].historiesLast);
  }

  

  getStatistics(item){
    this.httpClient.get(item, {responseType:'json'})
    .subscribe((response:any) =>{
      this.statics = response;
      var obj = response;
      this.labels = obj.labels;
      this.series = obj.series;
      this.setChart(this.labels,this.series);        
      },
    (error:any) =>{
      this.message = error;
    })  
  }  


  setChart(label,series){
    var canvas = document.getElementById("lineChartCustomerSync");
        Chart.defaults.global.responsive = true;
        Chart.defaults.global.tooltips.mode = 'label';
        Chart.defaults.global.tooltips.bodyColor = "rgba(220,220,220,1)";
        Chart.defaults.global.animation.duration = 2000;
        Chart.defaults.global.animation.easing = 'easeInOutQuart';
        this.LineChart = new Chart(canvas, {
         type:'line',
         data:{
           labels:label,
           datasets:[{
            label:"Adx",
            data:series,
            fill: true,
            backgroundColor: "rgba(220,220,220,0.2)",
            borderWidth: 2,
            borderColor: "rgba(220,220,220,1)",
            pointBorderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            },
          ]},
         options:{
          legend: {
            display: false
          },
           scales:{
            xAxes:
            [
              {
              display: true,
              scaleLabel: 
              {
                display: false,
                labelString: 'Timeline',
                fontColor:"rgba(220,220,220,1)",
                fontSize:10
              },
              ticks: {
                fontColor: "rgba(220,220,220,1)",
                fontSize: 10
               }
              }
            ],
             yAxes:
             [
              {
                display: true,
                scaleLabel: 
                {
                  display: false,
                  labelString: 'Times',
                  fontColor:"rgba(220,220,220,1)",
                  fontSize:10
                },
                ticks: {
                  fontColor: "rgba(220,220,220,1)",
                  fontSize: 10,
                  beginAtZero:true,
                  callback: function(label) {
                    var hours = Math.floor(label / (60 * 60 *1000));
     
                    var divisor_for_minutes = label % (60 * 60 *1000);
                    var minutes = Math.floor(divisor_for_minutes / 60 / 1000);
                
                    var divisor_for_seconds = divisor_for_minutes % (60*1000);
                    var seconds = Math.ceil(divisor_for_seconds / 1000);

                    var time = "";

                    if(hours>0) 
                     time += hours +"h";

                     if(minutes >0)
                     time += minutes +"m";

                     if(seconds >=0)
                     time += seconds+"s";

                     return time;
                  }
                 }
                }
             ]
           },
           layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
          },
         }
        })
    }

  checkJobHealty(item){
    this.httpClient.get(item, { responseType:'text' }).subscribe((response: any) => {
      //console.log(response);
      this.isHealthy=true;
      }, 
      (error: any) => {
          //console.log(error)
          this.isHealthy=false;
      });
  }

  getHistoriesLast(item){
    this.httpClient.get(item, { responseType:'json' }).subscribe((response: any) => {
      //console.log(response);
      this.objectKeys = Object.keys;
      this.LastHistoriesInfo=response;
      //console.log(this.LastHistoriesInfo);
      }, 
      (error: any) => {
          //console.log(error)
          this.message=error;
      });
  }
}
