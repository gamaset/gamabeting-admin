// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

// Colaborador Routing
import { ConfigurationRoutingModule } from './configuracao.routing.module';

//components
import { ListCompetitionComponent } from './competicao/competicao.component';
import { ListEventTypesComponent } from './tipo-de-evento/tipo-de-evento.component';

// service
import { CompetitionService } from '../../core/services/CompetitionService';
import { EventTypeService } from '../../core/services/EventTypeService';

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
  ],
  providers: [CompetitionService, EventTypeService],
  declarations: [ ListCompetitionComponent, ListEventTypesComponent ]
})
export class ConfigurationModule { }
