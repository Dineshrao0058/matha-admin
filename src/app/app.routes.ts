import { Routes } from '@angular/router';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AddComponent } from './Admin/add/add.component';
import { ViewComponent } from './Admin/view/view.component';
import { EditComponent } from './Admin/edit/edit.component';
import { FrameComponent } from './Admin/frame/frame.component';
import { PriceComponent } from './Admin/price/price.component';
import { SalesComponent } from './Admin/sales/sales.component';
import { ReportsComponent } from './Admin/reports/reports.component';
export const routes: Routes = [
    { path: '', component: AdminLoginComponent },
    { path: 'admin', component: AdminLoginComponent },
    {
        path: 'admin-dashboard', component: AdminDashboardComponent, children: [

            { path: 'add', component: AddComponent },
            { path: 'view', component: ViewComponent },
            { path: 'edit', component: EditComponent },
            { path: 'frame', component: FrameComponent },
            { path: 'price', component: PriceComponent },
            { path: 'sales', component: SalesComponent },
            { path: 'reports', component: ReportsComponent }
        ]
    }
];
