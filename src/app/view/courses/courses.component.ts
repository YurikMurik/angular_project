import { Component, OnInit } from '@angular/core';

export interface CourseItem {
  id: number;
  title: string;
  createdAtDate: any;
  durationTime: string;
  description: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent implements OnInit {
  
  constructor() { }

  public courses: CourseItem[] = [
    {
      id: 1,
      title: 'video_1',
      createdAtDate: '25/04/20',
      durationTime: '120',
      description: 'description of 1st video'
    },
    {
      id: 2,
      title: 'video_2',
      createdAtDate: '25/04/20',
      durationTime: '120',
      description: 'description of 2nd video'
    },
    {
      id: 3,
      title: 'video_3',
      createdAtDate: '25/04/20',
      durationTime: '120',
      description: 'description of 3st video'
    }
  ]

  ngOnInit(): void {
  }

}
