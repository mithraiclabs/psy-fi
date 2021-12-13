import {
  atom,
  selector
} from 'recoil';

export const atomHelpEnabled = atom({
  key: 'atomHelpEnabled',
  // default: true
  default: false
});

export const selectHelpEnabled = selector({
  key: 'selectHelpEnabled',
  get: ({ get }) => {
    return get(atomHelpEnabled);
  }
});
