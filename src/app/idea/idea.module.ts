import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaComponent } from './idea.component';
import { IdeaEditComponent } from './idea-edit/idea-edit.component';
import { IdeaListComponent } from './idea-list/idea-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatToolbarModule,
  MatStepperModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatTooltipModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [IdeaComponent, IdeaEditComponent, IdeaListComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatToolbarModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatTooltipModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports: [
    IdeaComponent
  ]
})
export class IdeaModule { }
