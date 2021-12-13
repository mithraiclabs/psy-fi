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
  atomLevelsDetail,
  atomLevelsDetailHeaderDemo,
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
  levelsDetail: number;
};

const MarketsExperimentalBuySell = (props: PropsMEBS) => {
  // console.log('MarketsExperimentalBuySell', JSON.stringify(props, null, 2));
  return (
    <div className={styles['market-experimental-buy-sell']}>
      <div>Buy</div>
      <div>Sell</div>
      <div />
      <div />
      {
        (props.levelsDetail === 2 || props.levelsDetail === 3) ? <div>Lv2 Detail</div> : null
      }
      {
        (props.levelsDetail === 3) ? <div>Lv3 Detail</div> : null
      }
    </div>
  );
};

type PropsMDCC = {
  ask: number;
  assetQuote: string;
  bid: number;
  breakeven?: number;
  default?: boolean; // experimental
  i: number;
  levelsDetail: number;
  levelsDetailHeaderDemo: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  selected?: boolean;
  strike: number;
};

const MarketsDisplayCardsContent = (props: PropsMDCC) => {
  const selectedStyles: React.CSSProperties = {
    gridColumn : (props.selected) ? 'span 2' : '',
    background: (props.selected) ? 'cyan' : '',
    color: (props.selected) ? '#111' : '',
    borderColor: (props.selected) ? 'cyan' : (props.default) ? 'cyan' : '#888' // experimental
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
            <td>ask</td>
            <td>{props.ask}</td>
          </tr>
            {
              (props.levelsDetailHeaderDemo === 2 || props.levelsDetailHeaderDemo === 3) ?
              <>
              <tr>
                <td>Lv2</td>
                <td>x</td>
              </tr>
              </> : null
            }
            {
              (props.levelsDetailHeaderDemo === 3) ?
              <>
              <tr>
                <td>Lv3</td>
                <td>y</td>
              </tr>
              </> : null
            }
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
    // setAssetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    levelsDetail
    // setLevelsDetail
  ] = useRecoilState(atomLevelsDetail);
  console.log('levelsDetail', levelsDetail);
  const [
    levelsDetailHeaderDemo
    // setLevelsDetailThDemo
  ] = useRecoilState(atomLevelsDetailHeaderDemo);
  console.log('levelsDetailHeaderDemo', levelsDetailHeaderDemo);
  const [
    selectedItem,
    setSelectedItem
  ] = useState(-1);
  useEffect(() => {
    console.log('setSelectedItem:', selectedItem);
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
                         breakeven={item.breakeven}
                         default={true} // experimental
                         i={i}
                         key={i}
                         levelsDetail={levelsDetail}
                         levelsDetailHeaderDemo={levelsDetailHeaderDemo}
                         onClick={(e) => {
                           console.log('card click, i:', i);
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
                         levelsDetail={levelsDetail}
                         levelsDetailHeaderDemo={levelsDetailHeaderDemo}
                         onClick={(e) => {
                           console.log('card click, i:', i);
                           setSelectedItem(i);
                         }}
                         selected={(i === selectedItem)}
                         strike={item.strike} /> : null
              })
            }
            <div className={styles['experimental-buy-sell-container']}>
              <MarketsExperimentalBuySell i={selectedItem} levelsDetail={levelsDetail} />
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
                         levelsDetail={levelsDetail}
                         levelsDetailHeaderDemo={levelsDetailHeaderDemo}
                         onClick={(e) => {
                           console.log('card click, i:', i);
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
    // setAssetQuote
  ] = useRecoilState(atomAssetQuote);
  const [
    selectedItem,
    setSelectedItem
  ] = useState(-1);
  const [
    levelsDetail
    // setAssetQuote
  ] = useRecoilState(atomLevelsDetail);
  console.log('levelsDetail', levelsDetail);
  const [
    levelsDetailHeaderDemo
    // setLevelsDetailThDemo
  ] = useRecoilState(atomLevelsDetailHeaderDemo);
  console.log('levelsDetailHeaderDemo', levelsDetailHeaderDemo);
  useEffect(() => {
    console.log('setSelectedItem:', selectedItem);
  }, [selectedItem]);
  return (
    <div className={styles['market-display-table']}>
      <table cellPadding='0' cellSpacing='0'>
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
            {
              (levelsDetailHeaderDemo === 2 || levelsDetailHeaderDemo === 3) ?
              <th>
                Lv2
              </th> : null
            }
            {
              (levelsDetailHeaderDemo === 3) ?
              <th>
                Lv3
              </th> : null
            }
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
                   console.log('tr click, i:', i);
                   setSelectedItem(i);
                  }}>
                  <td>
                    {item.strike}&nbsp;
                    <span className={styles['mdc-table-asset-quote']}>
                      {assetQuote.toUpperCase()}
                    </span>
                  </td>
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
              // // TODO: move styling to style sheets
              marketList.map((item, i) => {
                const selectedStyles: React.CSSProperties = {
                  // gridColumn : (props.selected) ? 'span 2' : '',
                  background: (i === selectedItem) ? 'cyan' : '',
                  color: (i === selectedItem) ? '#111' : '',
                  borderColor: (i === selectedItem) ? 'cyan' : '#555',
                  fontSize: (i === selectedItem) ? '1.2rem' : ''
                };
                return (i <= selectedItem) ? (
                  <tr
                    key={i}
                    onClick={(e) => {
                     console.log('tr click, i:', i);
                     setSelectedItem(i);
                    }}
                    style={selectedStyles}>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : '',
                        padding: (i === selectedItem) ? '1.1em 1.1em' : ''
                        // paddingLeft: (i === selectedItem) ? '1.1em' : ''
                      }}>
                      {item.strike}&nbsp;
                      <span className={styles['mdc-table-asset-quote']}>
                        {assetQuote.toUpperCase()}
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : ''
                      }}>{item.bid}</td>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : ''
                      }}>{item.ask}</td>
                  </tr>
                ) : null
              })
            }
            <tr>
              <td colSpan={3}>
                <div className={styles['experimental-buy-sell-container']}>
                  <MarketsExperimentalBuySell i={selectedItem} levelsDetail={levelsDetail} />
                </div>
              </td>
            </tr>
            {
              // Present items after selected card
              // // TODO: tr used 3x, abstract > component
              marketList.map((item, i) => {
                return (i > selectedItem) ? (
                  <tr
                    key={i}
                    onClick={(e) => {
                     console.log('tr click, i:', i);
                     setSelectedItem(i);
                    }}>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : ''
                      }}>
                      {item.strike}&nbsp;
                      <span className={styles['mdc-table-asset-quote']}>
                        {assetQuote.toUpperCase()}
                      </span>
                    </td>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : ''
                      }}>{item.bid}</td>
                    <td
                      style={{
                        borderBottomColor: (i !== selectedItem) ? '#888' : '',
                        borderTopColor: (i !== selectedItem) ? '#888' : ''
                      }}>{item.ask}</td>
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
  //   // setAssetQuote
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
