import styles from '../styles/Market.module.scss';
import styles_help from '../styles/Help.module.scss';
import React, { useEffect, useState } from 'react';
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
type PropsMEBS = {
  i: number;
};
const MarketsExperimentalBuySell = (props: PropsMEBS) => {
  console.log('MarketsExperimentalBuySell', JSON.stringify(props, null, 2));
  return (
    <div className={styles['market-experimental-buy-sell']}>
      <div>Buy</div>
      <div>Sell</div>
      <div />
      <div />
    </div>
  );
};

type PropsMDCC = {
  ask: number;
  assetQuote: string;
  bid: number;
  i: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
  strike: number;
};
const MarketsDisplayCardsContent = (props: PropsMDCC) => {
  const selectedStyles: React.CSSProperties = {
    gridColumn : (props.selected) ? 'span 2' : '',
    background: (props.selected) ? 'cyan' : '',
    color: (props.selected) ? '#111' : '',
    borderColor: (props.selected) ? 'cyan' : '#555'
  };
  return (
    <div
      className={styles['mdc-card']}
      onClick={props.onClick}
      style={selectedStyles}>
      <table>
        <tbody>
          <tr>
            <td>Strike</td>
            <td>{props.strike}</td>
          </tr>
          <tr>
            <td>Bid</td>
            <td>{props.bid}</td>
          </tr>
          <tr>
            <td>Ask</td>
            <td>{props.ask}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles['mdc-card-asset-quote']}>
        {props.assetQuote.toUpperCase()}
      </div>
    </div>
  );
};

const MarketsDisplayCards = () => {
  const marketList = useRecoilValue(selectMarketList);
  const [
    assetQuote
    // setassetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    selectedItem,
    setSelectedItem
  ] = useState(-1);
  useEffect(() => {
    console.log('Selected:', selectedItem);
  }, [selectedItem]) ;
  return (
    <div className={styles['market-display-cards']}>
      {
        (selectedItem === -1) ?
          <>
            {

              // type PropsMDCC = {
              //   ask: number;
              //   assetQuote: string;
              //   bid: number;
              //   i: number;
              //   strike: number;
              // }

              // Card not selected, present unfiltered list
              marketList.map((item, i) => {
                return <MarketsDisplayCardsContent
                         ask={item.ask}
                         assetQuote={assetQuote}
                         bid={item.bid}
                         i={i}
                         key={i}
                         onClick={(e) => {
                           console.log('i', i);
                           setSelectedItem(i);
                         }}
                         strike={item.strike} />
              })

            }
          </> :
          <>
            {
              // Present cards up to including selected card
              marketList.map((item, i) => {
                return (i <= selectedItem) ? <MarketsDisplayCardsContent
                         ask={item.ask}
                         assetQuote={assetQuote}
                         bid={item.bid}
                         i={i}
                         key={i}
                         onClick={(e) => {
                           console.log('i', i);
                           setSelectedItem(i);
                         }}
                         selected={(i === selectedItem)}
                         strike={item.strike} /> : null
              })
            }
            <div className={styles['experimental-buy-sell-container']}>
              <MarketsExperimentalBuySell i={selectedItem} />
            </div>
            {
              // Present cards after selected card
              marketList.map((item, i) => {
                return (i > selectedItem) ? <MarketsDisplayCardsContent
                         ask={item.ask}
                         assetQuote={assetQuote}
                         bid={item.bid}
                         i={i}
                         key={i}
                         onClick={(e) => {
                           console.log('i', i);
                           setSelectedItem(i);
                         }}
                         strike={item.strike} /> : null
              })
            }
          </>
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
  const [
    assetQuote
    // setassetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    selectedItem,
    setSelectedItem
  ] = useState(-1);
  useEffect(() => {
    console.log('Selected:', selectedItem);
  }, [selectedItem]) ;
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
          (selectedItem === -1) ?
          <>
          {
            // Item not selected, present unfiltered
            // // TODO: tr used 3x, abstract > component
            marketList.map((item, i) => {
              return (
                <tr
                  key={i}
                  onClick={(e) => {
                   console.log('i', i);
                   setSelectedItem(i);
                  }}>
                  <td>{item.strike} <span>{assetQuote.toUpperCase()}</span></td>
                  <td>{item.bid}</td>
                  <td>{item.ask}</td>
                </tr>
              );
            })
          }
          </> :
          <>
            {
              // Present items up to including selected card
              // // TODO: tr used 3x, abstract > component
              marketList.map((item, i) => {
                return (i <= selectedItem) ? (
                  <tr
                    key={i}
                    onClick={(e) => {
                     console.log('i', i);
                     setSelectedItem(i);
                    }}>
                    <td>{item.strike} <span>{assetQuote.toUpperCase()}</span></td>
                    <td>{item.bid}</td>
                    <td>{item.ask}</td>
                  </tr>
                ) : null
              })
            }
            <div className={styles['experimental-buy-sell-container']}>
              <MarketsExperimentalBuySell i={selectedItem} />
            </div>
            {
              // Present items after selected card
              // // TODO: tr used 3x, abstract > component
              marketList.map((item, i) => {
                return (i > selectedItem) ? (
                  <tr
                    key={i}
                    onClick={(e) => {
                     console.log('i', i);
                     setSelectedItem(i);
                    }}>
                    <td>{item.strike} <span>{assetQuote.toUpperCase()}</span></td>
                    <td>{item.bid}</td>
                    <td>{item.ask}</td>
                  </tr>
                ) : null
              })
            }
          </>
        }
        </tbody>
      </table>
    </div>
  );
};

const MarketsDisplay = () => {
  const helpEnabled = useRecoilValue(selectHelpEnabled);
  // const [
  //   assetQuote
  //   // setassetQuote
  // ] = useRecoilState(atomAssetQuote);
  const [
    assetUnderlying
    // setAssetUnderlying
  ] = useRecoilState(atomAssetUnderlying);
  const [
    marketType
    // setMarketType
  ] = useRecoilState(atomMarketType);
  const [
    marketUiStyle
    // setMarketUiStyle
  ] = useRecoilState(atomMarketUiStyle);

  return (
    <div className={styles['market-display']}>
      <h2>{assetUnderlying.toUpperCase()} {`${marketType}s`.toUpperCase()}</h2>
      {/*<p>Quoted in {assetQuote.toUpperCase()}</p>*/}
      {
        helpEnabled ? <div className={styles_help['help-v1']}><span>HELP</span> Lorem ipsum, helpful explainer, dolor sit amet. Toggle in recoil to disable</div> : null
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
