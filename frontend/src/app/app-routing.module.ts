import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { from } from 'rxjs';



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

  { path: 'list', component: ListPageComponent },

  { path: 'codetest', component: CodeEditorComponent},

  // препратка към главен компонент
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
