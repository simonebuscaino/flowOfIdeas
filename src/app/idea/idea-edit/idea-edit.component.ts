import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/app/idea/models/idea';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-idea-edit',
  templateUrl: './idea-edit.component.html',
  styleUrls: ['./idea-edit.component.scss']
})
export class IdeaEditComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {

  }
  createIdea(idea: Idea) {

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
