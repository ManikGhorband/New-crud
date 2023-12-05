import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListempComponent } from './listemp/listemp.component';

const routes: Routes = [
  {
    path: 'list',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path:"addemp", component:AddComponent
  },
  {
    path:"list", component:ListempComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
