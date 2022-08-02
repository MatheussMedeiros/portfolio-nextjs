import styles from '../../styles/projectlist.module.sass'

import Image from 'next/image'
import Link from 'next/link'

const ProjectList = () => {
  return <section className={styles.projectscontainer}>
    <div className={styles.list_box}>
      <h2>Projetos Doceria Experimental</h2>
      <div className={styles.list_container}>
      <a href="https://matheussmedeiros.github.io/Projeto-doceria/"  className={styles.list_img}>
        <Image src="/images/doceria.png" width="280" height="280" alt="doceria" className={styles.img}/>
      </a>
        <div>
          <p>Projeto exoerimental de um dociria feito com Html, Css e JavaScrip, com o uso de um Modal para a Galeria de fotos.</p>
          <a href="https://github.com/MatheussMedeiros/Projeto-doceria" className={styles.btn}>
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
    <div className={styles.list_box}>
      <h2>Projetos Hospedagem Experimental</h2>
      <div className={styles.list_container}>
      <a href="https://matheussmedeiros.github.io/Projeto-site-hospedagem/" className={styles.list_img}>
        <Image src="/images/hospedagem.png" width="280" height="280" alt="Hospedagem" className={styles.img}/>
      </a>
        <div>
          <p>Projeto experimental de um site de hospedagem com uso de Html e Css, com o uso de Flex Box!</p>
          <a href="https://github.com/MatheussMedeiros/Projeto-site-hospedagem" className={styles.btn}>
            Ver repositorio
          </a>
        </div>
      </div>
    </div><div className={styles.list_box}>
      <h2>Projetos Poknext Experimental</h2>
      <div className={styles.list_container}>
      <a href="https://pokenext-pink.vercel.app/" className={styles.list_img}>
        <Image src="/images/pokemon.png" width="280" height="280" alt="Hospedagem" className={styles.img}/>
      </a>
        <div>
          <p>Projeto com Next.js utilizando API externa e hospedado na VERCEL!</p>
          <a href="https://github.com/MatheussMedeiros/pokenext" className={styles.btn}>
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
    <Link href="/" >
      <a href="#" className={styles.btn_voltar}>voltar</a>
    </Link>
    
  </section>
}

export default ProjectList