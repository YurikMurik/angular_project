import { Component, OnInit } from '@angular/core';
import { CourseItem } from './course-list/interfaces';
import { fakeVideoList } from '../shared/mockedData';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  public courses: CourseItem[] = fakeVideoList;
  
  
}
