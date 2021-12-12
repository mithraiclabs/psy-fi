import {
  atom,
  selector
} from 'recoil';

// Initial concept: "User Level: 1 (beginner), 2 (standard), 3 (expert)"
// // Alternatively could be framed: "Level of Detail: 1 (less), 2 (standard), 3 (more)"
// // // Perhaps more usable as many experts may also prefer less detail in some situations
const levelsDetailTypes = [1, 2, 3];

export const atomLevelsDetail = atom({
  key: 'atomLevelsDetail',
  default: levelsDetailTypes[0]
  // default: levelsDetailTypes[1]
  // default: levelsDetailTypes[2]
});

export const atomLevelsDetailHeaderDemo = atom({
  key: 'atomLevelsDetailHeaderDemo',
  default: levelsDetailTypes[0]
  // default: levelsDetailTypes[1]
  // default: levelsDetailTypes[2]
});

export const selectorLevelsDetail = selector({
  key: 'selectorLevelsDetail',
  get: ({ get }) => {
    return get(atomLevelsDetail);
  }
});

// const levelsUserTypes = [1, 2, 3];

// export const atomLevelsUser = atom({
//   key: 'atomLevelsUser',
//   default: levelsUserTypes[0]
// });

// export const selectorLevelsUser = selector({
//   key: 'selectorLevelsUser',
//   get: ({ get }) => {
//     return get(atomLevelsUser);
//   }
// });
