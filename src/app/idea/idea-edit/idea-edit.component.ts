import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/idea/models/idea';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { PouchdbService } from '../services/pouchdb.service';


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
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar,
    private db: PouchdbService
  ) { }

  ngOnInit() {
    this.init();
  }
  checkDate($scope) {
    $scope = new Date();
  }
  submitForm() {
    if (!this.form.valid) {
      return;
    }

    this.db
      .setIdea(this.form.value)
      .then(response => {
        // this.form.value._rev = response.rev;
        this.snackbar.open('Salvataggio avvenuto con successo', null, {
          duration: 2000
        });

        if (!this.form.value._id) {
          this.form.value._id = response.id;
          this.router.navigate([`/theFlow/editFlow/${response.id}`]);
        }

        this.init();
      })
      .catch(error => {
        this.snackbar.open('Errore del DB nel salvataggio dei dati', 'Errore', {
          duration: 2000
        });
        console.error(error);
      });
  }
  init() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    this.routeSub = this.route.params.subscribe((params: Params) => {
      // tslint:disable-next-line: triple-equals
      if (params.id == 0) {
        this.createForm(new Idea());
      } else {
        this.db
          .getIdea(params.id)
          .then((idea: Idea) => {
            this.updateForm(idea);
          })
          .catch(error => {
            console.log(error);
            this.snackbar.open('Errore del DB', 'Errore', {duration: 2000});
          });
      }
    });
  }
  updateForm(idea: Idea) {
    this.form = this.formBuilder.group({
      _id: [idea._id],
      _rev: [idea._rev],
      title: [idea.title, Validators.required],
      description: [idea.description, Validators.required],
      createDate: [idea.createDate],
      updateDate: [idea.updateDate = new Date()]
    });
  }
  createForm(idea: Idea) {
      this.form = this.formBuilder.group({
        _id: [idea._id],
        _rev: [idea._rev],
        title: [idea.title, Validators.required],
        description: [idea.description, Validators.required],
        createDate: [idea.createDate = new Date()]
      });
  }
  get ideas() {
    return this.form.get('ideas') as FormArray;
  }
}
