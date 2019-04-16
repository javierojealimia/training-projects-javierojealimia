import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerProjectFormComponent } from './viewer-project-form.component';

describe('ViewerProjectFormComponent', () => {
  let component: ViewerProjectFormComponent;
  let fixture: ComponentFixture<ViewerProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
