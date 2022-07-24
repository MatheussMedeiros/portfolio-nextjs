import styles from '../../styles/projetoscontainer.module.sass'

import Link from 'next/link'


const ProjectsContainer = () => {
  return <section className={styles.projectscontainer}>
    <h2>Projetos</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime porro praesentium quaerat fuga iste? Alias, eos officiis. Necessitatibus recusandae quaerat natus voluptatem earum quia expedita consequatur sunt voluptatibus unde.</p>
    <Link href="/projects">
    <a href="#" className={styles.btn}>
        Ver projetos
    </a>
    </Link>
  </section>
}

export default ProjectsContainer