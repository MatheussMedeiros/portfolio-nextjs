import styles from '../../styles/projectlist.module.sass'

import Image from 'next/image'
import Link from 'next/link'

const ProjectList = () => {
  return <section className={styles.projectscontainer}>
    <h2>Projetos Doceria Experimental</h2>
    <div className={styles.list_container}>
    <a href="https://matheussmedeiros.github.io/Projeto-doceria/"  className={styles.list_img}>
      <Image src="/images/doceria.png" width="280" height="280" alt="doceria" className={styles.img}/>
    </a>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime porro praesentium quaerat fuga iste? Alias, eos officiis. Necessitatibus recusandae quaerat natus voluptatem earum quia expedita consequatur sunt voluptatibus unde.</p>
        <a href="https://github.com/MatheussMedeiros/Projeto-doceria" className={styles.btn}>
          Ver repositorio
        </a>
      </div>
    </div>
    <h2>Projetos Hospedagem Experimental</h2>
    <div className={styles.list_container}>
    <a href="https://matheussmedeiros.github.io/Projeto-site-hospedagem/" className={styles.list_img}>
      <Image src="/images/hospedagem.png" width="280" height="280" alt="Hospedagem" className={styles.img}/>
    </a>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic maxime porro praesentium quaerat fuga iste? Alias, eos officiis. Necessitatibus recusandae quaerat natus voluptatem earum quia expedita consequatur sunt voluptatibus unde.</p>
        <a href="https://github.com/MatheussMedeiros/Projeto-site-hospedagem" className={styles.btn}>
          Ver repositorio
        </a>
      </div>
    </div>
    <Link href="/" >
      <a href="#" className={styles.btn_voltar}>voltar</a>
    </Link>
    
  </section>
}

export default ProjectList