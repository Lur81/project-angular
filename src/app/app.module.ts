import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './shared/components/main/main.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { RatingModule } from 'primeng/rating';
import { RatingStarComponent } from './shared/components/rating-star/rating-star.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ProductsPageComponent,
    GestionPageComponent,
    ProductDetailComponent,
    MainComponent,
    EditPageComponent,
    RatingStarComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RatingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
