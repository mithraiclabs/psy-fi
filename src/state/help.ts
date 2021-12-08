import {
  atom,
  selector
} from 'recoil';

export const helpEnabled = atom({
  key: 'helpEnabled',
  default: true
});

export const selectHelpEnabled = selector({
  key: 'selectHelpEnabled',
  get: ({ get }) => {
    return get(helpEnabled);
  }
});
