import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
import { App4Component } from './app4/app4.component';
import { App5Component } from './app5/app5.component';
import { App6Component } from './app6/app6.component';
import { App7Component } from './app7/app7.component';
import { AppcarrComponent } from './appcarr/appcarr.component';
import { AppimgComponent } from './appimg/appimg.component';
import { BsComponent } from './bs/bs.component';
import { Comp1Component } from './comp1/comp1.component';
import { LoginComponent } from './login/login.component';

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
  { path: 'login', component: LoginComponent },
  { path: 'img', component: AppimgComponent },
  { path: 'carr', component: AppcarrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
