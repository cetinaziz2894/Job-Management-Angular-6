import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js/dist/chart';


@Component({
  selector: 'app-accural',
  templateUrl: './accural.component.html',
  styleUrls: ['./accural.component.css']
})
export class AccuralComponent implements OnInit {

  LineChart:any;
  LastHistoriesInfo:{};

  components  = [
    {
      name: "ACCURAL",
      jobname:"ACCURAL",
      icon: "trending_up",
      routeTrigger:"trigger",
      routeHistory:"histories",
      cardClass:"card-header-warning",
      cardIconClass:"card-header-light-purple",
      serviceCallName:"accuraljob",
      healthyUrl:"http://83.66.131.71:1453/healthcheck",
      routeDetailUrl:"http://83.66.131.71:1453/api/schedules",
      statisticUrl:"http://83.66.131.71:1299/api/jobs/accuraljob/statistics",
      historiesLast:"http://83.66.131.71:1299/api/jobs/accuraljob/histories/last",
      routeDetail:"detail"}
  ];

  @Input() component;

  constructor(private httpClient : HttpClient) {}
  isHealthy : boolean;
  statics:[];
  labels:[];
  series:string[];
  message : any;
  objectKeys;
  value:any;
  //array : string[] = [];

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
      /*for (let index = 0; index < obj.series.length; index++) {
        //var x = this.fancyTimeFormat(obj.series[index]);
        this.array.push(x);
      }
      */
      this.labels = obj.labels;
      this.series = obj.series;
      this.setChart(this.labels,this.series);        
      },
    (error:any) =>{
      this.message = error;
    })  
  }  

/*
  fancyTimeFormat(time)
  {   
      // Hours, minutes and seconds
      var hrs = ~~(time / 3600);
      var mins = ~~((time % 3600) / 60);
      var secs = ~~time % 60;


      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret :string = '';

      if (hrs > 0) {
          ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }

      ret += "" + mins + "dk" +":" + (secs < 10 ? "0" : "");
      ret += "" + secs + "sn";
      return ret;
  }
  */

  setChart(label,series){
    var canvas = document.getElementById("lineChartAccural");
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
            label:"Accural",
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