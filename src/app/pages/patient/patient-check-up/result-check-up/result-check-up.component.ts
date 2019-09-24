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

  @Input() data;

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
      backgroundColor: ['#F21B1B', '#F99704', '#FEED01','#3EF92E','#342AF3','#6F24F7','#9425F9'],
    },
  ];

  private diseases:any[];
  private indexDetail:number = 0;

  constructor(
    private localServicesService:LocalServicesService,
  ) { }

  ngOnInit() {
    this.data = JSON.parse(this.data);
    for(var i = 0; i<this.data.length; i++){
      this.pieChartData[i] = Math.round((Number) (this.data[i]*100)*10)/10;
    }


    this.localServicesService.getDiseases().subscribe(data=>{
      this.diseases = data;
      for(var i = 0; i<this.diseases.length; i++){
        // var index = (""+this.diseases[i].name).indexOf(" ");
        // var name = (""+this.diseases[i].name).substring(0,index);
        if(this.pieChartData[i]>5)
        this.pieChartLabels[i]= this.diseases[i].name;
        else
        this.pieChartLabels[i]= "";
      }
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

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
