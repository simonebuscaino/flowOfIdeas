import { IdeaEditComponent } from './idea/idea-edit/idea-edit.component';
import { IdeaListComponent } from './idea/idea-list/idea-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { path: 'theFlow', component: IdeaListComponent},
  {path: 'theFlow/editFlow/:id', component: IdeaEditComponent},
  {path: '', redirectTo: 'theFlow', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
