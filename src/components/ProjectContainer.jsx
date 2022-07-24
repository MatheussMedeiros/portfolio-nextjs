import ProjectList from "./ProjectList"

import styles from '../../styles/maincontainer.module.sass'

const MainContainer = () => {
  return (
    <main className={styles.main_container}>
      <ProjectList />
    </main>
  )
}

export default MainContainer