import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
   
    {
        path: 'school',
        component: HeaderComponent,
        children: [
          {
            path: '',
             redirectTo: 'Dashboard',pathMatch: 'full' 
          },
          {
            path: 'Dashboard', component: DashboardComponent,
          },
        ]
    },
    {
        path:'login',
        component:LoginComponent
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },

]

  const config: ExtraOptions = {
    useHash: true,
  };
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }    