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
  // default: assetTypes[0] // btc
  // default: assetTypes[1] // eth
  // default: assetTypes[2] // sol
  default: assetTypes[3] // usdc
});

export const atomAssetUnderlying = atom({
  key: 'atomAssetUnderlying',
  default: assetTypes[0] // btc
  // default: assetTypes[1] // eth
  // default: assetTypes[2] // sol
  // default: assetTypes[3] // usdc
});

export const atomMarketList = atom<Market[]>({
  key: 'atomMarketList',
  default: marketListMock,
});

export const atomMarketType = atom({
  key: 'atomMarketType',
  default: marketTypes[0] // calls
  // default: marketTypes[1] // puts
});

export const atomMarketUiStyle = atom({
  key: 'atomMarketUiStyle',
  default: marketUiStyles[0] // cards
  // default: marketUiStyles[2] // table
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
