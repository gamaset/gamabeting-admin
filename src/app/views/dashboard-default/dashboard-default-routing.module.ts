import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { DashboardDefaultComponent } from './dashboard-default.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardDefaultComponent,
    data: {
      title: 'Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDefaultRoutingModule {}
