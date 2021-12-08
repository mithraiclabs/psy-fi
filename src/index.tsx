import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { WalletKitProvider, ConnectWalletButton } from '@gokiprotocol/walletkit';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

import './styles/app.global.scss';
import styles from './styles/app.module.scss';

import app_data from './content/app.json';

import { DevTools } from './components/DevTools';
import HeaderNav from './components/HeaderNav';

import Admin from './pages/Admin';
import Home from './pages/Home';
import Market from './pages/Market';

const ConnectWallet = () => (<>Connect Wallet <ConnectWalletButton /></>);
const DisconnectWallet = () => (<>Disconnect Wallet</>);

ReactDOM.render(
  <WalletKitProvider
    defaultNetwork='devnet'
    app={{
      name: app_data.name
    }}>
    <RecoilRoot>
      <DevTools />
      <React.StrictMode>
        <div className={styles.app}>
          <HeaderNav />
          <main className={styles.main}>
            <div className={styles.view}>
              <Router>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/admin' component={Admin} />
                  <Route exact path='/market' component={Market} />
                  <Route exact path={['/connect','/login','/signin']} component={ConnectWallet} />
                  <Route exact path={['/disconnect','/logout','/signout']} component={DisconnectWallet} />
                </Switch>
              </Router>
            </div>
          </main>
        </div>
      </React.StrictMode>
    </RecoilRoot>
  </WalletKitProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
