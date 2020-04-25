import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSectionSearchComponent } from './courses-section-search.component';

describe('CoursesSectionSearchComponent', () => {
  let component: CoursesSectionSearchComponent;
  let fixture: ComponentFixture<CoursesSectionSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSectionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
