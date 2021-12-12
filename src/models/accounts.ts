import { PublicKey } from '@solana/web3.js';

export type Account = {
  key: PublicKey;
  accountName?: string
};
