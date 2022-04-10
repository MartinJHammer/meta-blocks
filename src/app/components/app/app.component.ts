import { Component } from '@angular/core';
import { META_BLOCKS } from './data/meta-blocks';
import { MetaBlock } from './models/meta-block';
import { duplicateElements, filter, map } from './utils/arrays';
import { pipe } from './utils/base';
import { pick } from './utils/objects';
import { shuffleArray } from './utils/randomizers';
import { log, withLog } from './utils/side-effects';
import { upperCaseArray } from './utils/strings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngOnInit(): void {
    const shuffleWithLog = withLog(shuffleArray);
    shuffleWithLog([1,2,3,4,5,6,7,8,9,10]);

    const pickName = pick<MetaBlock>('name');
    
    const getFunnyBlocks: (x: MetaBlock[]) => string[] = pipe(
      filter<MetaBlock>(x => x.meta.tags?.includes('funny')),
      map(pickName),
      upperCaseArray,
      duplicateElements,
      log('Results:')
    );

    getFunnyBlocks(META_BLOCKS);
  }
}
