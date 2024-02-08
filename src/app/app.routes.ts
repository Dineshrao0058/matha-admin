import { Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddComponent } from './Admin/add/add.component';
export const routes: Routes = [
    { path: '', component: AdminLoginComponent },
    { path: 'admin', component: AdminLoginComponent },
    {
        path: 'admin-dashboard', component: AdminDashboardComponent, children: [
            
            { path: 'add', component: AddComponent }
        ]
    }
];
