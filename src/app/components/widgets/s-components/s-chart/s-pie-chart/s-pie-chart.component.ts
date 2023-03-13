import { Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 's-s-pie-chart',
  templateUrl: './s-pie-chart.component.html',
  styleUrls: ['./s-pie-chart.component.scss']
})
export class SPieChartComponent {

  @ViewChild('MyChart', { static: true }) MyChart?: any;
  @Input() data?: any[] ;
  @Input() label?: string[];
  public chart !: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    this.createChart();
  }

  createChart() {
    this.chart = new Chart(this.MyChart.nativeElement, {
      type: 'pie', //this denotes tha type of char
      data: {
        // values on X-Axis
        labels: this.label,
        datasets: [
          {
            data: this.data,
            backgroundColor: ["#43acd1","#EFAE08"]
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });

  }
}
