import { Routes } from '@angular/router';

import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
export const routes: Routes = [

    { path: 'admin', component: AdminLoginComponent },
    {
        path: 'dashboard', component: AdminDashboardComponent, children: [

        ]
    }
];
