import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarColaboradoresComponent } from './listar/listar-colaboradores.component';
import { FormColaboradoresComponent } from './form/form-colaboradores.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Colaboradores'
        },
        children: [
            {
                path: 'listar-colaboradores',
                component: ListarColaboradoresComponent,
                data: {
                    title: 'Lista de Colaboradores'
                }
            },
            {
                path: 'cadastrar-colaborador',
                component: FormColaboradoresComponent,
                data: {
                    title: 'Cadastrar Colaborador'
                }
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
