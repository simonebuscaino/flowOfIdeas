import { MatSnackBar } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/idea/models/idea';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PouchdbService } from '../services/pouchdb.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-idea-edit',
  templateUrl: './idea-edit.component.html',
  styleUrls: ['./idea-edit.component.scss']
})
export class IdeaEditComponent implements OnInit {

form: FormGroup;
private routeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private db: PouchdbService
  ) { }

  ngOnInit() {

  }
  createForm(idea: Idea) {
    this.form = this.formBuilder.group({
      _id: [idea._id],
      _rev: [idea._rev],
      title: [idea.title],
      description: [idea.description]
    });
  }

  init() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.routeSub = this.route.params.subscribe((params: Params) => {
      if (params.id == 0) {
        this.createForm(new Idea());
      } else {
        this.db
          .getIdea(params.id)
          .then((idea: Idea) => {
            this.createForm(idea);
          })
          .catch(error => {
            this.snackbar.open('Errore del DB', 'Errore', {duration: 2000});
          });
      }
    });
  }

  // groupBuilder(idea: Idea = new Idea()) {
  //   return this.formBuilder.group({
  //     title: [idea.title || null, Validators.required],
  //     description: [idea.description || null],
  //     createDate: [idea.createDate || null],
  //     updateDate: [idea.updateDate || null]
  //   });
  // }
  deleteIdea() {

  }
  checkDate($scope) {
    $scope = new Date();
  }

}
