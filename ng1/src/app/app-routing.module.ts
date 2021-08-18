import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './comps/news/news.component';
import { HomeComponent } from './comps/home/home.component';
import { ProductComponent } from './comps/product/product.component';

const routes: Routes = [
  {path:'',  pathMatch:'full',redirectTo:'home'},
  {path:'home', pathMatch:'full', component: HomeComponent},
  {path:'news', pathMatch:'full', component: NewsComponent},
  {path:'product', pathMatch:'full', component: ProductComponent},
  {path:'**', pathMatch:'full',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
