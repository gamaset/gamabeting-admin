import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCarteiraComponent } from './listar/listar-carteira.component';
import { ListarTransacoesComponent } from './transacoes/listar-transacoes.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Carteira'
        },
        children: [
            {
                path: 'listar-carteiras',
                component: ListarCarteiraComponent,
                data: {
                    title: 'Lista de Carteiras'
                }
            },
            {
                path: 'listar-transacoes/:balanceId',
                component: ListarTransacoesComponent,
                data: {
                    title: 'Lista de Transações'
                }
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarteiraRoutingModule { }
