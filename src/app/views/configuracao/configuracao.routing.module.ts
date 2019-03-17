import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEventTypesComponent } from './tipo-de-evento/tipo-de-evento.component';
import { ListCompetitionComponent } from './competicao/competicao.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Configuracoes'
        },
        children: [
            {
                path: 'tipos-de-evento',
                component: ListEventTypesComponent,
                data: {
                    title: 'Tipos de Eventos'
                }
            },
            {
                path: 'competicoes',
                component: ListCompetitionComponent,
                data: {
                    title: 'Competicoes'
                }
            }, 
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
