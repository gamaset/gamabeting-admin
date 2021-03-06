import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { AuthGuardService } from './core/auth/AuthGuardService';
import { RoleGuardService } from './core/auth/RoleGuardService';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard-default',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'dashboard-default',
        loadChildren: './views/dashboard-default/dashboard-default.module#DashboardDefaultModule'
      },
      {
        path: 'configuracoes',
        loadChildren: './views/configuracao/configuracao.module#ConfigurationModule',
        canActivate: [RoleGuardService],
        data: {
          role: 'ROLE_MANAGER'
        }
      },
      {
        path: 'colaboradores',
        loadChildren: './views/colaborador/colaborador.module#ColaboradorModule',
        canActivate: [RoleGuardService],
        data: {
          role: 'ROLE_MANAGER'
        }
      },
      {
        path: 'clientes',
        loadChildren: './views/cliente/cliente.module#ClienteModule'
      },
      {
        path: 'apostas',
        loadChildren: './views/aposta/aposta.module#ApostaModule'
      },
      {
        path: 'carteiras',
        loadChildren: './views/carteira/carteira.module#CarteiraModule'
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
