import {
  atom,
  selector
} from 'recoil';

const assetTypes = ['btc', 'eth', 'sol', 'usdc'];
const marketTypes = ['call', 'put'];

// -------

export const atomAssetQuote = atom({
  key: 'atomAssetQuote',
  default: assetTypes[3]
});

export const atomAssetUnderlying = atom({
  key: 'atomAssetUnderlying',
  default: assetTypes[0]
});

export const atomMarketType = atom({
  key: 'atomMarketType',
  default: marketTypes[0]
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

export const selectMarketType = selector({
  key: 'selectMarketType',
  get: ({ get }) => {
    return get(atomMarketType);
  }
});
