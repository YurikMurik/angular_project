import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSectionAddItemComponent } from './courses-section-add-item.component';

describe('CoursesSectionAddItemComponent', () => {
  let component: CoursesSectionAddItemComponent;
  let fixture: ComponentFixture<CoursesSectionAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSectionAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
