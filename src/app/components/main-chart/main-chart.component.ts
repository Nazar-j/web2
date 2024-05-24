import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
	selector: 'app-main-chart',
	standalone: true,
	imports: [],
	templateUrl: './main-chart.component.html',
	styleUrl: './main-chart.component.scss',
})
export class MainChartComponent {
	public chart: any;

	ngOnInit(): void {
		this.createChart();
	}

	createChart() {
		this.chart = new Chart('MyChart', {
			type: 'line', //this denotes tha type of chart

			data: {
				// values on X-Axis
				labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				datasets: [
					{
						label: 'TV',
						data: [0, 7, 12, 6, 5, 3, 1, 7, 3, 6, 0],
						backgroundColor: '#7d67e9',
						cubicInterpolationMode: 'monotone',
						pointRadius: 0,
						fill: true
					},
					{
						label: 'Profit',
						data: [0, 20, 28, 15, 12, 3, 7, 15, 7, 12, 0],
						backgroundColor: '#579dd9',
						cubicInterpolationMode: 'monotone',
						pointRadius: 0,
						fill: true
					},
					{
						label: 'Mag',
						data: [0, 15, 25, 35, 15, 13, 8, 13, 20, 7, 0],
						backgroundColor: '#33b1de',
						cubicInterpolationMode: 'monotone',
						pointRadius: 0,
						fill: true,
					},
				],
			},
			options: {
				aspectRatio: 2.5
			},
		});
	}
}
