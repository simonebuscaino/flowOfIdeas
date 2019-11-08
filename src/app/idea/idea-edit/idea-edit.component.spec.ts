import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaEditComponent } from './idea-edit.component';

describe('IdeaEditComponent', () => {
  let component: IdeaEditComponent;
  let fixture: ComponentFixture<IdeaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
