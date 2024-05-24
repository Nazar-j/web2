import { Component, OnInit } from '@angular/core'
import { MainChartComponent } from '../../main-chart/main-chart.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
    standalone: true,
    selector: 'app-row2',
    imports: [MainChartComponent, HttpClientModule],
    templateUrl: './row2.component.html',
    styleUrl: '../rows.component.scss',
})

export class Row2Component{
    // constructor(private btcServise: BtcService) {}

    // ngOnInit(): void {
    //     this.btcServise.getPrice().subscribe(price => {
    //         console.log(price)
    //     })
    // }
}