import { Component } from '@angular/core'
import { Row1Component } from '../rows/row1/row1.component'
import { Row2Component } from '../rows/row2/row2.component'
import { Row3Component } from '../rows/row3/row3.component'
import { Row4Component } from '../rows/row4/row4.component'


@Component({
    standalone: true,
    selector: 'app-dashboard',
    imports: [Row1Component, Row2Component, Row3Component, Row4Component],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {}