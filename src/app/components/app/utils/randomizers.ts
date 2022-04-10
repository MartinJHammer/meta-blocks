import { clone, pipe } from './base';

export const shuffle = <T>(data: T[]): T[] => {
    let i = data.length;
    while (i--) {
      const ri = Math.floor(Math.random() * (i + 1));
      [data[i], data[ri]] = [data[ri], data[i]];
    }
    return data;
  };
  
  export const shuffleArray =  pipe(
    clone,
    shuffle
  );
  