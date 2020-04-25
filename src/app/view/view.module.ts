import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './courses/breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesSectionComponent } from './courses/courses-section/courses-section.component';
import { CoursesSectionSearchComponent } from './courses/courses-section/courses-section-search/courses-section-search.component';
import { CoursesSectionAddItemComponent } from './courses/courses-section/courses-section-add-item/courses-section-add-item.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    CoursesComponent,
    CoursesSectionComponent,
    CoursesSectionSearchComponent,
    CoursesSectionAddItemComponent,
    CoursesListComponent,
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewModule { }
