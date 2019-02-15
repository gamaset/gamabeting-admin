import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarClienteComponent } from './listar/listar-cliente.component';
import { FormClienteComponent } from './form/form-cliente.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Clientes'
        },
        children: [
            {
                path: 'listar-clientes',
                component: ListarClienteComponent,
                data: {
                    title: 'Lista de Clientes'
                }
            },
            {
                path: 'cadastrar-cliente',
                component: FormClienteComponent,
                data: {
                    title: 'Cadastrar Cliente'
                }
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
