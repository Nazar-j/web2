import { NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NameEditorComponent } from '../../components/form/form.component';

@Component({
	selector: 'app-dashboard-page',
	standalone: true,
	imports: [
		RouterOutlet,
		UpperCasePipe,
		NgIf,
		HeaderComponent,
		SidebarComponent,
		DashboardComponent,
		NameEditorComponent
	],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardPageComponent {
	title = 'my-app';
	is_login = localStorage.getItem('token') ? true : false
}