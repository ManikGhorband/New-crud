import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListempComponent } from './listemp/listemp.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'listemp',
    redirectTo: 'listemp',
    pathMatch: 'full',
  },
  {
    path:"addemp", component:AddComponent
  },
  {
    path:"listemp", component:ListempComponent
  },
  { path: 'edit/:id', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
