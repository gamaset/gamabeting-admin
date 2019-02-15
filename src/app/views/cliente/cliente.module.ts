// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

// Colaborador Routing
import { ClienteRoutingModule } from './cliente.routing.module';

//components
import { ListarClienteComponent } from './listar/listar-cliente.component';

// service
import { AgentService } from '../../core/services/AgentService';
import { FormClienteComponent } from './form/form-cliente.component';

@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
  ],
  providers: [AgentService],
  declarations: [ ListarClienteComponent, FormClienteComponent ]
})
export class ClienteModule { }
