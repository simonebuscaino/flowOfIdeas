import { Component, OnInit } from '@angular/core';
import { Idea } from '../models/idea';
import { MatSnackBar } from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  ideas: Idea[];
  date: Date;

  constructor(private snackbar: MatSnackBar) {
    this.date = new Date();
   }

  ngOnInit() {
    this.ideas = [
      new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date),
        new Idea('titolo1', 'Descrizione', this.date, this.date),
        new Idea('titolo2', 'Descrizione', this.date, this.date),
        new Idea('titolo3', 'Descrizione', this.date, this.date)
      ];
  }
  checkDate($scope) {
    $scope = new Date();
  }


}
