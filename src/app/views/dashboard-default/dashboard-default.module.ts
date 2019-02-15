import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardDefaultComponent } from './dashboard-default.component';
import { DashboardDefaultRoutingModule } from './dashboard-default-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardDefaultRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardDefaultComponent ]
})
export class DashboardDefaultModule { }
