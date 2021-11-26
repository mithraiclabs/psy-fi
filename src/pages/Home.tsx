
import {
  useConnectedWallet
} from '@saberhq/use-solana';
import Init from '../components/Init';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const wallet = useConnectedWallet();

  return (
    <section className={styles.home}>
      {/* Auth Demo */}
      {
        wallet?.connected ? null : <h1>Please Connect Wallet<br /><br /></h1>
      }
      {/* Project Init Demo */}
      <Init />
    </section>
  )
}

export default Home;
