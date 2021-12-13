
import {
  useConnectedWallet
} from '@saberhq/use-solana';
import ContentHome from '../components/ContentHome';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const wallet = useConnectedWallet();
  return (
    <section className={styles.home}>
      <ContentHome />
    </section>
  )
}

export default Home;
