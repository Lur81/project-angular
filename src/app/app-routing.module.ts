import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

const routes: Routes = [
  {
    path: "", component: HomePageComponent
  },
  {
    path: "home", component: HomePageComponent
  },
  {
    path: "products", component: ProductsPageComponent
  },
  {
    path: "gestion", component: GestionPageComponent
  },
  {
    path: "products/:id", component: EditPageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
