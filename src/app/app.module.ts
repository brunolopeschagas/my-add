import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProdutcService } from './products/product.service';
import { RatingComponent } from './rating/rating.component';
import { ProductComponent } from './product/product.component';
import { TruncatePipe } from './truncate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    UserFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [ProdutcService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
