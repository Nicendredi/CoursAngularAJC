import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App10Component } from './app10/app10.component';
import { App11Component } from './app11/app11.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';
import { App6Component } from './app6/app6.component';
import { App7Component } from './app7/app7.component';
import { App8Component } from './app8/app8.component';
import { App9Component } from './app9/app9.component';
import { AppcarrComponent } from './appcarr/appcarr.component';
import { AppimgComponent } from './appimg/appimg.component';
import { BsComponent } from './bs/bs.component';
import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';
import { Personnesession1Component } from './personnesession1/personnesession1.component';
import { Personnesession2Component } from './personnesession2/personnesession2.component';

const routes: Routes = [
  { path: 'bs', component: BsComponent },
  { path: 'comp1', component: Comp1Component },
  { path: 'app1', component: App1Component },
  { path: 'app2', component: App2Component },
  { path: 'app3', component: App3Component },
  { path: 'app4', component: App4Component },
  { path: 'app5', component: App5Component },
  { path: 'app6', component: App6Component },
  { path: 'app7', component: App7Component },
  { path: 'app8', component: App8Component },
  { path: 'app9', component: App9Component },
  { path: 'app10', component: App10Component },
  { path: 'app11', component: App11Component },
  { path: 'login', component: LoginComponent },
  { path: 'img', component: AppimgComponent },
  { path: 'carr', component: AppcarrComponent },
  { path: 'ps1', component: Personnesession1Component },
  { path: 'ps2', component: Personnesession2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
