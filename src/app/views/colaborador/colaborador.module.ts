// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

// Colaborador Routing
import { ColaboradorRoutingModule } from './colaborador.routing.module';

//components
import { ListarColaboradoresComponent } from './listar/listar-colaboradores.component';

// service
import { AgentService } from '../../core/services/AgentService';
import { FormColaboradoresComponent } from './form/form-colaboradores.component';
import { UiCommomModule } from '../../shared/commom.module';

@NgModule({
  imports: [
    CommonModule,
    ColaboradorRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
    UiCommomModule,
  ],
  providers: [AgentService],
  declarations: [ ListarColaboradoresComponent, FormColaboradoresComponent ]
})
export class ColaboradorModule { }
