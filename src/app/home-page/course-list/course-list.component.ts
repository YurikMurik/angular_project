import { Component, OnInit, Input } from '@angular/core';
import { CourseItem } from './interfaces';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less']
})
export class CourseListComponent implements OnInit {

  @Input() courses: CourseItem[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
