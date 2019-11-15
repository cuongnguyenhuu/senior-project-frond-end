import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { LocalServicesService } from './../../../../services/local-services/local-services.service';

@Component({
  selector: 'app-result-check-up',
  templateUrl: './result-check-up.component.html',
  styleUrls: ['./result-check-up.component.css']
})
export class ResultCheckUpComponent implements OnInit {

  @Input() private data;

  @Input() imageName;
  
  @Output() TryAgain = new EventEmitter();
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        fontColor: 'white', // legend color (can be hexadecimal too)
      },
    },
    tooltips:{
      enabled:false,
      mode: 'index',
      position:'nearest',
      custom: null
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] =[];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['#F4AFAF', '#B7F3BB', '#B0B1FC'],
    },
  ];

  private diseases:any[];
  private indexDetail:number = 0;
  // private percentages;
  private top3:any[] = [];
  private temp:any[];
  constructor(
    private localServicesService:LocalServicesService,
  ) {
    
   }

  ngOnInit() {
    //this.data = JSON.parse(this.data);
    // this.percentages = this.data;
    this.temp = [...this.data];
    console.log(this.temp)
    this.temp = this.temp.sort((a,b)=>b-a).slice(0,3);
    console.log(this.data)

    for(var i = 0; i<this.temp.length; i++){
      this.pieChartData[i] = Math.round((Number) (this.temp[i]*100)*10)/10;
    }


    this.localServicesService.getDiseases().subscribe(data=>{
      this.diseases = data;
      console.log(this.data);
      for(var i = 0; i<3; i++){
        // var index = (""+this.diseases[i].name).indexOf(" ");
        // var name = (""+this.diseases[i].name).substring(0,index);
        this.pieChartLabels[i]= this.pieChartData[i]+"%";
        this.top3[i] = this.data.indexOf(this.temp[i])
      }
      console.log(this.top3)
    },
    error=>{
      console.log(error);
    });
    
    console.log(this.pieChartLabels);
  }

  public tryAgain(){
    this.TryAgain.emit();
  }

  public toggleDetail(i){
    if(this.indexDetail!= 0){
      this.indexDetail = i;
    }else{
      this.indexDetail = 0;
    }
    console.log(i);
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
}
