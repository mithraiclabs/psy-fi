export type Market = {
  strike: number;
  ask: number;
  bid: number;
  breakeven?: number;
  change?: number;
  lastPrice?: number;
  iva: number;
  ivb: number;
  volume?: number;
  quoteAsset: string;
}

/**
{
  "strike": 75000.00,
  "ask": 2.25,
  "bid": 1.56,
  "breakeven": "45000.00",
  "change": 0,
  "lastPrice": 0
  "iva": 30.9,
  "ivb": 31.3,
  "open": 1404,
  "volume": 0,
  "quoteAsset": "USDC"
}
**/

export type MarketAsset = {
  tokenSymbol: string;
  mintAddress: string;
  decimals: number;
  icon?: string;
  tokenName?: string;
};
