import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudApplicationComponent } from './crud-application/crud-application.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DialogComponent } from './dialog/dialog.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './login/login.component';
import { MaterialTableComponent } from './material-table/material-table.component';
import { PipeComponent } from './pipe/pipe.component';
import { RegisterComponent } from './register/register.component';
import { ReusableComponent } from './reusable/reusable.component';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { TrackingDeviceComponent } from './tracking-device/tracking-device.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [

  // For Login:-

  { path: "", redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'dashboard/data-binding', component: DataBindingComponent },

  { path: 'dashboard/tabs', component: TabsComponent },
  { path: 'dashboard/data-binding', component: DataBindingComponent },
  { path: 'dashboard/directive', component: DirectiveComponent },
  { path: 'dashboard/sidenav', component: SidenavComponent },
  { path: 'dashboard/pipe', component: PipeComponent },
  { path: 'dashboard/service', component: ServiceComponent },
  { path: 'dashboard/crud-application', component: CrudApplicationComponent },
  { path: 'dashboard/crud-form', component: CrudFormComponent },
  { path: 'dashboard/dialog', component: DialogComponent },
  { path: 'dashboard/material-table', component: MaterialTableComponent },
  { path: 'dashboard/reusable', component: ReusableComponent },
  { path: 'dashboard/tracking-device', component: TrackingDeviceComponent },
  { path: 'dashboard/routing', component: RoutingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }