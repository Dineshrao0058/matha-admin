import { Routes } from '@angular/router';

import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

export const routes: Routes = [
    
    { path: 'admin', component: AdminLoginComponent },
    {
        path: 'dashboard', component: DashboardComponent, children: [

        ]
    }
];
