import { Component, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 's-s-line-chart',
  templateUrl: './s-line-chart.component.html',
  styleUrls: ['./s-line-chart.component.scss']
})
export class SLineChartComponent {
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
      type: 'bar', //this denotes tha type of char
      data: {
        // values on X-Axis
        labels: ["","","","","","","xz"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },

      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });

  }
}
