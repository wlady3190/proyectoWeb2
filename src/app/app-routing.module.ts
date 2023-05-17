import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagementComponent } from './components/management/management.component';
import { ProductsComponent } from './components/products/products.component';
import { E404Component } from './components/e404/e404.component';
import { AboutComponent } from './components/about/about.component';
import { SalesComponent } from './components/sales/sales.component';
import { LoginComponent } from './components/login/login.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginGuard } from './guards/Login/login.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'management', component:ManagementComponent},
  {path:'products', component:ProductsComponent},
  {path:'about', component:AboutComponent},
  {path:'sales', component:SalesComponent},
  {path:'login', component:LoginComponent},
  {path:'inventario', component:InventarioComponent,canActivate:[LoginGuard]},
  {path:'registro', component:RegistroComponent},



  {path:'**', component:E404Component},
  {path:'',  redirectTo:'home', pathMatch:'full'},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
