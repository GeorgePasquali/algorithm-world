import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TopicsComponent } from './topics/topics.component';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { TraitsPageComponent } from "./traits-page/traits-page.component";
import { from } from 'rxjs';




const routes: Routes = [

  {
    path: '',component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  { path: 'login',component: LoginComponent },
  { path: 'topics',component: TopicsComponent },
  { path: 'test', component: ListPageComponent },
  { path: 'codetest', component: CodeEditorComponent },
  { path: 'tutorial', component: TutorialPageComponent },
  { path: 'trait/:id', component: TraitsPageComponent },

  // препратка към главен компонент
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
