import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsComponent } from './bs/bs.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp1aComponent } from './comp1a/comp1a.component';
import { Comp1bComponent } from './comp1b/comp1b.component';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { LoginComponent } from './login/login.component';
import { AppimgComponent } from './appimg/appimg.component';
import { AppcarrComponent } from './appcarr/appcarr.component';
import { App4Component } from './app4/app4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BsComponent,
    Comp1Component,
    Comp1aComponent,
    Comp1bComponent,
    App1Component,
    App2Component,
    App3Component,
    LoginComponent,
    AppimgComponent,
    AppcarrComponent,
    App4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
