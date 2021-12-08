
import {
  useConnectedWallet
} from '@saberhq/use-solana';
import styles from '../styles/Admin.module.scss';
const Admin = () => {
  const wallet = useConnectedWallet();
  return (
    <section className={styles.admin}>
      {
        wallet?.connected ? null : <h2>Please Connect Wallet<br /><br /></h2>
      }
      <h1>Admin</h1>
    </section>
  )
}

export default Admin;
