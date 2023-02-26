import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UhomeComponent } from '../pages/dashboard/user/uhome/uhome.component';

const routes: Routes = [
  {
    path: 'home',
    component: UhomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
