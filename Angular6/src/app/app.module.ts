import { OnlyLoggedInUsersGuard } from './shared/service/guard/only-loggedIn-users-guard';
import { UserService } from './shared/service/user/user.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';

// Angular Material
import { MaterialModule } from './shared/material.module';

import { RestService } from './shared/rest.service';

import { appRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { ProductService } from './shared/service/products/product.service';
import { BookService } from './shared/service/book/book.service';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from 'src/app/shared/components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlwaysAuthGuard } from './shared/service/guard/always-auth-guard';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    BookListComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    RestService,
    UserService,
    ProductService,
    BookService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
