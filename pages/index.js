import MainContainer from '../src/components/MainContainer'
import Sidebar from '../src/components/Sidebar'
import styles from '../styles/Home.module.sass'

export default function Home() {
  return (
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      <h1>Matheus Medeiros</h1>
      <div className={styles.grid_container}>
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  )
}
