import styles from '../../styles/socialnetworks.module.sass'

const SocialNetworks = () => {
  return <section className={styles.social_networks}>
        <a className={styles.social_btn_instagram} href="https://www.instagram.com/_math_abacaxi/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
        <a className={styles.social_btn_github} href="https://github.com/MatheussMedeiros" target="_blank"><i className="fa-brands fa-github-square"></i></a>
        <a className={styles.social_btn_linkedin} href="https://www.linkedin.com/in/matheus-medeiros-653081246/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </section>
  
}

export default SocialNetworks