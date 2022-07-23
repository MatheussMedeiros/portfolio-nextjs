import AboutContainer from "./AboutContainer"
import ProjectsContainer from "./ProjectsContainer"
import TechnologiesContainer from "./TechnologiesContainer"

import styles from '../../styles/maincontainer.module.sass'

const MainContainer = () => {
  return (
    <main className={styles.main_container}>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContainer