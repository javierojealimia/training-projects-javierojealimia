import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectsFormComponent } from './filter-projects-form.component';

describe('FilterProjectsFormComponent', () => {
  let component: FilterProjectsFormComponent;
  let fixture: ComponentFixture<FilterProjectsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProjectsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProjectsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
