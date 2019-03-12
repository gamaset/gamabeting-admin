// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

// Carteira Routing
import { CarteiraRoutingModule } from './carteira.routing.module';

//components
import { ListarCarteiraComponent } from './listar/listar-carteira.component';
import { FormCarteiraComponent } from './form/form-carteira.component';
import { ListarTransacoesComponent } from './transacoes/listar-transacoes.component';

// service
import { WalletBalanceService } from '../../core/services/walletBalanceService';

@NgModule({
  imports: [
    CommonModule,
    CarteiraRoutingModule,
    BsDropdownModule,
    ReactiveFormsModule,
  ],
  providers: [WalletBalanceService],
  declarations: [ ListarCarteiraComponent, FormCarteiraComponent, ListarTransacoesComponent ]
})
export class CarteiraModule { }
