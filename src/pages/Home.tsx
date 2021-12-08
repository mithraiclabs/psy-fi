
import {
  useConnectedWallet
} from '@saberhq/use-solana';
import ContentHome from '../components/ContentHome';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const wallet = useConnectedWallet();
  return (
    <section className={styles.home}>
      {
        wallet?.connected ? null : <h1>Please Connect Wallet<br /><br /></h1>
      }
      <ContentHome />
    </section>
  )
}

export default Home;
