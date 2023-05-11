import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';
import { ProductsComponent } from './components/products/products.component';
import { E404Component } from './components/e404/e404.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'management', component:ManagementComponent},
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'**', component:E404Component},
  {path:'',  redirectTo:'home', pathMatch:'full'},
  








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
