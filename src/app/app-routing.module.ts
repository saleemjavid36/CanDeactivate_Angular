import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { CanDeactivateGuard } from './services/can-deactivate-guard';
import { ComposeComponent } from './pages/compose/compose.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'compose',
    component: ComposeComponent,
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
