import { Component, OnInit } from '@angular/core';
import { Idea } from '../models/idea';
import { MatSnackBar } from '@angular/material';
import { PouchdbService } from '../services/pouchdb.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  ideas: Idea[];
  date: Date;

  constructor(private snackbar: MatSnackBar, private db: PouchdbService) {
    this.date = new Date();
   }

  ngOnInit() {
    this.db.fetchIdea().then(ideas => {
      this.ideas = ideas;
    }).catch(error => {
      console.log(error);
      this.snackbar.open(
        'Errore nel caricamento dei dati',
        'Errore',
        {duration: 2000});
    });
  }

  delete(idea) {
    this.db
    .deleteIdea(idea)
    .then(() => {
      console.log(`Rimosso ${idea.title}`);
    })
    .catch(error => {
      console.error(error);
    });
  }
}

