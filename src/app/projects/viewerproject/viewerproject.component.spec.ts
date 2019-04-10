import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerprojectComponent } from './viewerproject.component';

describe('ViewerprojectComponent', () => {
  let component: ViewerprojectComponent;
  let fixture: ComponentFixture<ViewerprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
