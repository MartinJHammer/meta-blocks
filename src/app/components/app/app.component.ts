import { Component } from '@angular/core';
import { shuffleNumbers, withLog } from './utils/logic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MetaBlocks';

  ngOnInit(): void {
    const shuffleWithLog = withLog(shuffleNumbers);

    shuffleWithLog([1,2,3,4,5,6,7,8,9,10]);
  }
}
