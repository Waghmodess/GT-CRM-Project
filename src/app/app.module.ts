import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudApplicationComponent } from './crud-application/crud-application.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// For Loging
import { AngularFireModule } from '@angular/fire/compat'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DirectivesDirective } from './directives.directive';
import { ReusableComponent } from './reusable/reusable.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { RoutingComponent } from './routing/routing.component';
import { ServiceComponent } from './service/service.component';
import { TrackingDeviceComponent } from './tracking-device/tracking-device.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { SortPipe } from './sort.pipe';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    DataBindingComponent,
    CrudApplicationComponent,
    MaterialTableComponent,
    TabsComponent,
    SidenavComponent,
    DialogComponent,
    DirectivesDirective,
    ReusableComponent,
    PipeComponent,
    CustomPipePipe,
    RoutingComponent,
    ServiceComponent,
    TrackingDeviceComponent,
    CrudFormComponent,
    SortPipe,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatFormFieldModule, MatInputModule, MatSelectModule, MatGridListModule, MatCardModule,
    MatCheckboxModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule,
    MatTableModule, MatPaginatorModule, MatListModule, MatExpansionModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatTabsModule, MatChipsModule, MatSidenavModule, MatIconModule, MatStepperModule,
    MatSliderModule, MatSlideToggleModule, MatDialogModule, MatToolbarModule, MatMenuModule, MatDividerModule,
    MatTreeModule, MatTooltipModule, MatRippleModule, MatSnackBarModule,


    AngularFireModule.initializeApp(environment.firebase)


  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
