import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';



import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule, NgxMonacoEditorConfig  } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListPageComponent } from './list-page/list-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';

import { TopicService } from './topic.service';
import { TopicsComponent } from './topics/topics.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TutorialPageComponent } from './tutorial-page/tutorial-page.component';
import { TraitsPageComponent } from './traits-page/traits-page.component';


const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: '/assets', // configure base path for monaco editor
  defaultOptions: { scrollBeyondLastLine: false }, // pass default options to be used
  onMonacoLoad: () => { console.log((<any>window).monaco); } // here monaco object will be available as window.monaco use this function to extend monaco editor functionalities.
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ListPageComponent,
    CodeEditorComponent,
    TopicsComponent,
    TutorialPageComponent,
    TraitsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MonacoEditorModule.forRoot(monacoConfig),
    MarkdownModule.forRoot()
  ],
  providers: [ TopicService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
