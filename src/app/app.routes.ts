import { Routes } from '@angular/router';
import { Bai3Component } from './pages/bai3/bai3.component';
import { Bai4Component } from './pages/bai4/bai4.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import { Bai2Component } from './pages/bai2/bai2.component';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { ProductListComponent } from './pages/admin/product/list/list.component';
import { ProductAddComponent } from './pages/admin/product/add/add.component';
import { ProductEditComponent } from './pages/admin/product/edit/edit.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    component: UserlayoutComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'bai2', component: Bai2Component },
      { path: 'bai3', component: Bai3Component },
      { path: 'bai4', component: Bai4Component },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'not-found', component: NotfoundComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'add', component: ProductAddComponent },
      { path: 'edit/:id', component: ProductEditComponent },
    ],
  },
];
