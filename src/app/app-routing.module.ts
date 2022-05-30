import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectiveComponent } from './directive/directive.component';
import { PipeComponent } from './pipe/pipe.component';
import { ServiceComponent } from './service/service.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  { path: 'tabs', component: TabsComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'service', component: ServiceComponent },
  { path: '**', component: ServiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
