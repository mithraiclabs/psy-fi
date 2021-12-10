import {
  atom,
  selector
} from 'recoil';

const assetTypes = ['beginner', 'intermediate', 'advanced'];

export const atomUserLevel = atom({
  key: 'userLevel',
  default: assetTypes[0]
});

export const selectUserLevel = selector({
  key: 'selectUserLevel',
  get: ({ get }) => {
    return get(atomUserLevel);
  }
});
