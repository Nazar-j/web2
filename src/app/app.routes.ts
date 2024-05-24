import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NameEditorComponent } from './components/form/form.component';
import { AuthGuard } from './auth.guard';
import { DashboardPageComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardPageComponent, canActivate: [AuthGuard]},
    { path: 'profile', component: ProfileComponent},
    { path: 'login', component: NameEditorComponent},
    { path: '**', component: NotFoundComponent, pathMatch: 'full'}
];
