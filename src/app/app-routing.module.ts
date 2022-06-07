import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BsComponent } from './bs/bs.component';

const routes: Routes = [
  { path: 'toto', component: BsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
