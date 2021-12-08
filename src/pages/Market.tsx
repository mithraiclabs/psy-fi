import {
  useConnectedWallet
} from '@saberhq/use-solana';
import MarketsDisplay from '../components/MarketsDisplay';
import styles from '../styles/Market.module.scss';
const Market = () => {
  const wallet = useConnectedWallet();
  return (
    <section className={styles.market}>
      {
        wallet?.connected ? null : <h2>Please Connect Wallet<br /><br /></h2>
      }
      <MarketsDisplay />
    </section>
  )
}

export default Market;
