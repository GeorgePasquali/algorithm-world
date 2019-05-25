import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // препратка към главен компонент
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
