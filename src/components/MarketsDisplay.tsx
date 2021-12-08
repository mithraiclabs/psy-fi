import styles from '../styles/Template.module.scss';
// import React, { useState } from 'react';
import {
  useRecoilState,
  useRecoilValue
} from 'recoil';
import {
  // selectAssetUnderlying,
  atomAssetUnderlying,
  atomAssetQuote,
  atomMarketType,
  selectHelpEnabled
  // selectMarketType
 } from '../state';
const MarketsDisplay = () => {
  const helpEnabled = useRecoilValue(selectHelpEnabled);
  const [
    assetUnderlying,
    // setAssetUnderlying
  ] = useRecoilState(atomAssetUnderlying);
  const [
    assetQuote,
    // setassetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    marketType,
    // setMarketType
  ] = useRecoilState(atomMarketType);
  return (
    <div className={styles.template}>
      <h1>Markets</h1>
      <h2>{assetUnderlying.toUpperCase()} {`${marketType}s`.toUpperCase()}</h2>
      <p>Quoted in {assetQuote.toUpperCase()}</p>
      {
        helpEnabled ? <div className={styles.help}>Lorem Ipsum Dolor Sit Amet</div> : null
      }
      <h3>In Progress, Let's Go... 🚀</h3>
    </div>
  );
};

export default MarketsDisplay;
