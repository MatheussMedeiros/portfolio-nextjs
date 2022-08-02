import styles from '../../styles/projetoscontainer.module.sass'

import Link from 'next/link'


const ProjectsContainer = () => {
  return <section className={styles.projectscontainer}>
    <h2>Projetos</h2>
    <p>Aqui estão alguns dos projetos que pude expressar um pouco da minha habilidade que já desenvolvi.</p>
    <Link href="/projects">
    <a href="#" className={styles.btn}>
        Ver projetos
    </a>
    </Link>
  </section>
}

export default ProjectsContainer