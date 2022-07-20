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
import { GitHubDataComponent } from './git-hub-data/git-hub-data.component';
import {HttpClientModule} from '@angular/common/http';
import { GitHubService } from './git-hub-data/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    UserFormComponent,
    LoginComponent,
    GitHubDataComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [ProdutcService, LoginService, GitHubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
