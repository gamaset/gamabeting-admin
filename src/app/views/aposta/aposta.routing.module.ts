import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarApostaComponent } from './listar/listar-aposta.component';
import { DetalharApostaComponent } from './detalhar/detalhar-aposta.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Apostas'
        },
        children: [
            {
                path: 'listar-apostas',
                component: ListarApostaComponent,
                data: {
                    title: 'Lista de Apostas'
                }
            }, 
            {
                path: 'detalhar-aposta/:betId',
                component: DetalharApostaComponent,
                data: {
                    title: 'Detalhe da Aposta'
                }
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApostaRoutingModule { }
