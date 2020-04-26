import { Component } from '@angular/core';
import { fakeVideoList } from '../core/mocks/mockedData';
import { ICourseItemInfo } from '../core/models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent {

  public courses: ICourseItemInfo[] = fakeVideoList;
}
