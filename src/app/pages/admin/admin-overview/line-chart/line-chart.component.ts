import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() data;

  @Input() type:String;

  public lineChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Patient' },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    // { data: [180, 480, 770, 90, 1000, 270, 400], label: 'Series C', yAxisID: 'y-axis-1' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        // {
        //   type: 'line',
        //   mode: 'vertical',
        //   scaleID: 'x-axis-0',
        //   value: 'March',
        //   borderColor: 'orange',
        //   borderWidth: 2,
        //   label: {
        //     enabled: true,
        //     fontColor: 'orange',
        //     content: 'LineAnno'
        //   }
        // },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    // { // dark grey
    //   backgroundColor: 'rgba(77,83,96,0.2)',
    //   borderColor: 'rgba(77,83,96,1)',
    //   pointBackgroundColor: 'rgba(77,83,96,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(77,83,96,1)'
    // },
    // { // red
    //   backgroundColor: 'rgba(255,0,0,0.3)',
    //   borderColor: 'red',
    //   pointBackgroundColor: 'rgba(148,159,177,1)',
    //   pointBorderColor: '#fff',
    //   pointHoverBackgroundColor: '#fff',
    //   pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    // }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(
    public dataPipe: DatePipe
  ) { }

  public dt = [];
  ngOnInit() {
    console.log(this.data);
    if (this.data != null) {
      this.data.forEach(element => {
        this.dt[this.dt.length] = element.numbers;
        if(this.type =="appointment"){
          this.lineChartLabels[this.lineChartLabels.length] = this.dataPipe.transform(element.month, 'MMM d');
        }else{
          this.lineChartLabels[this.lineChartLabels.length] = this.dataPipe.transform(element.month, 'MMM');
        }
      });
      if (this.type == "appointment") {
        console.log(this.dt);
        this.lineChartData[0] = { data: this.dt, label: 'Appointments' }
      }
      if (this.type == "patient") {
        console.log(this.dt);
        this.lineChartData[0] = { data: this.dt, label: 'Patients' }
      }
      if (this.type == "doctor") {
        console.log(this.dt);
        this.lineChartData[0] = { data: this.dt, label: 'Doctors' }
      }
      console.log(this.lineChartData)
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
