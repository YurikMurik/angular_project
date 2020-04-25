import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from '../courses.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  
  @Input() courses: CourseItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
