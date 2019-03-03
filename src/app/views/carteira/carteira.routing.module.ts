import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCarteiraComponent } from './listar/listar-carteira.component';

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
            // {
            //     path: 'cadastrar-cliente',
            //     component: FormClienteComponent,
            //     data: {
            //         title: 'Cadastrar Cliente'
            //     }
            // }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarteiraRoutingModule { }
