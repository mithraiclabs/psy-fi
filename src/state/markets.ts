import {
  atom,
  selector
} from 'recoil';
import { Market } from '../models';
import marketListMock from '../content/marketList.mock.json';

const assetTypes = ['btc', 'eth', 'sol', 'usdc'];
const marketTypes = ['call', 'put'];
const marketUiStyles = ['cards', 'list', 'table'];

// -------

export const atomAssetQuote = atom({
  key: 'atomAssetQuote',
  default: assetTypes[3]
});

export const atomAssetUnderlying = atom({
  key: 'atomAssetUnderlying',
  default: assetTypes[0]
});

export const atomMarketList = atom<Market[]>({
  key: 'atomMarketList',
  default: marketListMock,
});

export const atomMarketType = atom({
  key: 'atomMarketType',
  default: marketTypes[0]
});

export const atomMarketUiStyle = atom({
  key: 'atomMarketUiStyle',
  // default: marketUiStyles[0]
default: marketUiStyles[2]
});

// -------

export const selectAssetQuote = selector({
  key: 'selectAssetQuote',
  get: ({ get }) => {
    return get(atomAssetQuote);
  }
});

export const selectAssetUnderlying = selector({
  key: 'selectAssetUnderlying',
  get: ({ get }) => {
    return get(atomAssetUnderlying);
  }
});

export const selectMarketList = selector({
  key: 'selectMarketList',
  get: ({ get }) => {
    return get(atomMarketList);
  }
});

export const selectMarketType = selector({
  key: 'selectMarketType',
  get: ({ get }) => {
    return get(atomMarketType);
  }
});
