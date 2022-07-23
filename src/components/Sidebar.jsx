import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';

import styles from '../../styles/sidebar.module.sass'
import Image from 'next/image';

const Sidebar = () => {
  return (
  <aside className={styles.sidebar}>
    <div className={styles.img_container}>
      <Image src="/images/capturar.png" width="280" height="280" alt="eu" className={styles.img} />
    </div>
    <p className={styles.title}>Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a className={styles.btn} href="#">Dowload</a>
  </aside>
  )
}

export default Sidebar