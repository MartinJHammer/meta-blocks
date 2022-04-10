import { Component } from '@angular/core';
import { META_BLOCKS } from './data/meta-blocks';
import { log, pipe, withLog } from './utils/base';
import { noNillElements } from './utils/misc';
import { shuffleNumbers } from './utils/randomizers';
import { upperCaseArray } from './utils/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MetaBlocks';
  metBlocks = META_BLOCKS;

  ngOnInit(): void {
    const shuffleWithLog = withLog(shuffleNumbers);

    shuffleWithLog([1,2,3,4,5,6,7,8,9,10]);
    
    const processStrings = pipe<string[]>(
      noNillElements<string[]>('[processStrings]: val was nill'),
      upperCaseArray,
      log('Results:')
    );

    processStrings(['test', 'test', 'test']);
  }
}
