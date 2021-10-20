import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from '../app/member-list/member-list.component';
import { MemberFormComponent } from '../app/member-form/member-form.component';
const routes: Routes = [
  {
    path: 'members',
    pathMatch: 'full',
    component: MemberListComponent,
  },
  {
    path: 'form',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members',
  },
  {
    path: '**',
    redirectTo: 'members',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
