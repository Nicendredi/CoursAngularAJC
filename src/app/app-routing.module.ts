import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { App3Component } from './app3/app3.component';
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
  { path: 'login', component: LoginComponent },
  { path: 'img', component: AppimgComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
