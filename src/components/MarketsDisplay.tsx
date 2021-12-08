import styles from '../styles/Market.module.scss';
// import React, { useState } from 'react';
import {
  useRecoilState,
  useRecoilValue
} from 'recoil';
import {
  // selectAssetUnderlying,
  atomAssetQuote,
  // atomMarketList,
  atomMarketType,
  atomMarketUiStyle,
  atomAssetUnderlying,
  selectHelpEnabled,
  selectMarketList
  // selectMarketType
 } from '../state';

/*
  TOGGLE
  /src/state/markets -> atomMarketUiStyle -> default
*/
const MarketsDisplayCards = () => {
  const marketList = useRecoilValue(selectMarketList);
  return (
    <div className={styles['market-display-cards']}>
      {
        marketList.map((item, i) => {
          return (
            <div key={i} className={styles['mdc-card']}>
              <table>
                <tbody>
                  <tr>
                    <td>Strike</td>
                    <td>{item.strike}</td>
                  </tr>
                  <tr>
                    <td>Bid</td>
                    <td>{item.bid}</td>
                  </tr>
                  <tr>
                    <td>Ask</td>
                    <td>{item.ask}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })
      }
    </div>
  );
};

/*
  TOGGLE
  /src/state/markets -> atomMarketUiStyle -> default
*/
const MarketsDisplayTable = () => {
  const marketList = useRecoilValue(selectMarketList);
  return (
    <div className={styles['market-display-table']}>
      <table>
        <thead>
          <tr>
            <th>
              Strike
            </th>
            <th>
              Bid
            </th>
            <th>
              Ask
            </th>
          </tr>
        </thead>
        <tbody>
        {
          marketList.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.strike}</td>
                <td>{item.bid}</td>
                <td>{item.ask}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

const MarketsDisplay = () => {
  const helpEnabled = useRecoilValue(selectHelpEnabled);
  const [
    assetQuote
    // setassetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    assetUnderlying
    // setAssetUnderlying
  ] = useRecoilState(atomAssetUnderlying);
  const [
    marketType
    // setMarketType
  ] = useRecoilState(atomMarketType);
  const [
    marketUiStyle,
    // setMarketUiStyle
  ] = useRecoilState(atomMarketUiStyle);

  return (
    <div className={styles['market-display']}>
      <h2>{assetUnderlying.toUpperCase()} {`${marketType}s`.toUpperCase()}</h2>
      <p>Quoted in {assetQuote.toUpperCase()}</p>
      {
        helpEnabled ? <div className={styles.help}>Lorem Ipsum Dolor Sit Amet</div> : null
      }
      <div>
        {
          (marketUiStyle === 'cards') ? <MarketsDisplayCards />  :
          (marketUiStyle === 'list') ? <>List</> :
          (marketUiStyle === 'table') ? <MarketsDisplayTable /> : null
        }
      </div>
      <div>In Progress, Let's Go... 🚀</div>
    </div>
  );
};

export default MarketsDisplay;
