import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpAuthInterceptor } from './interceptors/auth-http.interceptor';
import { LoginPage } from './pages/login/login.page';
import { ProductsPage } from './pages/products/products.page';
import { ProfilePage } from './pages/profile/profile.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminDashboardPage } from './pages/admin-dashboard/admin-dashboard.page';
import { RefreshTokenHttpInterceptor } from './interceptors/refresh-token-http.interceptor';
import { ProductDetailPage } from './pages/product-detail/product-detail.page';
import { UserComponent } from './pages/user/user.component';
@NgModule({
  declarations: [AppComponent, LoginPage, ProductsPage, ProfilePage, NavbarComponent, AdminDashboardPage, ProductDetailPage, UserComponent],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    // Check Token Before each request
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RefreshTokenHttpInterceptor,
      multi: true,
    },
    // Add HttpAuthInterceptor - Add Bearer Token to request
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
