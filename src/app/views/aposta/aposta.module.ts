// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

// Colaborador Routing
import { ApostaRoutingModule } from './aposta.routing.module';

//components
import { ListarApostaComponent } from './listar/listar-aposta.component';

// service
import { ApostaService } from '../../core/services/ApostaService';
import { DetalharApostaComponent } from './detalhar/detalhar-aposta.component';
import { UiCommomModule } from '../../shared/commom.module';

@NgModule({
  imports: [
    CommonModule,
    ApostaRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
    UiCommomModule
  ],
  providers: [ApostaService],
  declarations: [ ListarApostaComponent, DetalharApostaComponent ]
})
export class ApostaModule { }
