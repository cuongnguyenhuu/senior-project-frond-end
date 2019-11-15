import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { AppointmentService } from './../../../../services/appointment-services/appointment.service';
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  private appointment;
  private doctor;
  private patient;
  private totalDoctors;
  private totalPatients;

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
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
  public pieChartLabels: Label[] = ['Patient','Doctor'];
  public pieChartData: number[] = [40, 30];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = false;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)','rgba(0,255,0,0.3)'],
    },
  ];

  constructor(

    private appointmentService : AppointmentService
  ) { }

  ngOnInit() {
    this.appointmentService.getAppointmentOverview().subscribe(data=>{
      console.log(data);
      if(data!=null){
        this.appointment = data.appointment;
        this.doctor = data.doctor;
        this.patient = data.patient;
        this.totalDoctors = data.totalDoctors;
        this.totalPatients = data.totalPatient;
        this.pieChartData = [this.totalPatients,this.totalDoctors];
      }
    },error=>{
      console.log(error);
    })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
