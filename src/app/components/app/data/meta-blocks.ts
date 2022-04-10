import { MetaBlock } from '../models/meta-block';

export const META_BLOCKS: MetaBlock[] = [
    {
        id: '1',
        name: 'Cat falling over XD',
        content: '<video src="cat-vid"></video>',
        meta: {
            created: new Date(),
            lastModified: new Date(),
            tags: ['funny', 'cats'],
        }
    },
    {
        id: '2',
        name: 'Dog falling over XD',
        content: '<video src="dog-vid"></video>',
        meta: {
            created: new Date(),
            lastModified: new Date(),
            tags: ['funny', 'dogs'],
        }
    },
    {
        id: '3',
        name: 'Squat technique',
        content: '<video src="cat-vid"></video>',
        meta: {
            created: new Date(),
            lastModified: new Date(),
            tags: ['training', 'strength', 'squats','technique'],
        }
    },
];
