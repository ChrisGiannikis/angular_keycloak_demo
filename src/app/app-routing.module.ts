import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AdminDashboardPage } from './pages/admin-dashboard/admin-dashboard.page';
import { LoginPage } from './pages/login/login.page';
import { ProductsPage } from './pages/products/products.page';
import { ProfilePage } from './pages/profile/profile.page';
import {ProductDetailPage} from "./pages/product-detail/product-detail.page";

const routes: Routes = [
  {
    path: '',
    component: LoginPage, // Public
  },
  {
    path: 'products',
    component: ProductsPage, // Public
  },
  {
    path: 'products/:productId',
    component: ProductDetailPage, // Admin Only
    canActivate: [RoleGuard],// Protected by Keycloak Role: ADMIN
    data: {
      role: "ADMIN"
    }
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard],// Protected by Keycloak auth
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardPage,
    canActivate: [RoleGuard],// Protected by Keycloak Role: ADMIN
    data: {
      role: "ADMIN"
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
