import { PublicKey } from '@solana/web3.js';

export type Account = {
  key: PublicKey;
  accountName?: string
};

export type Asset = {
  tokenSymbol: string;
  mintAddress: string;
  decimals: number;
  icon?: string;
  tokenName?: string;
};

export type Option = {
  key: string
}

export type Project = {
  key: string;
  name: string;
  description?: string;
  logo: string;
  serumSpotMarket: string;
  website?: string;
  twitter?: string;
  discord?: string;
}

export interface TestInterface {
  id: number
  name: string
}

export type Token = {
  key: string
}
