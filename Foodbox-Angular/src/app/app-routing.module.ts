import { ManageCustomersComponent } from './components/manage-customers/manage-customers.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ManagePurchaseComponent } from './components/manage-purchase/manage-purchase.component';

const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:ProductComponent},
  {path:'cart', component:CartComponent},
  {path:'admin', component:AdminLoginComponent},
  {path:'adminDashboard', component:AdminDashboardComponent},
  {path:'manageCustomer',component:ManageCustomersComponent},
  {path:'managePurchase',component:ManagePurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
