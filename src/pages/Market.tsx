import {
  useConnectedWallet
} from '@saberhq/use-solana';
import MarketsDisplay from '../components/MarketsDisplay';
import styles from '../styles/Market.module.scss';
import styles_user from '../styles/User.module.scss';

const Market = () => {
  const wallet = useConnectedWallet();
  return (
    <section className={styles.market}>
      {
        wallet?.connected ? null : <div className={styles_user.connect}>Please Connect Wallet</div>
      }
      <h1 className={styles['page-title']}>Market Component</h1>
      <MarketsDisplay />
    </section>
  )
}

export default Market;
