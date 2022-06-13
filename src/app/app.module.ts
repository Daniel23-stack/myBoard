import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ClarityModule } from "@clr/angular";
import { NgModule } from '@angular/core';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    Page7Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FroalaViewModule,
    FroalaEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
