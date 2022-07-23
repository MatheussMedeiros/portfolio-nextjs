import styles from '../../styles/socialnetworks.module.sass'

const SocialNetworks = () => {
  return <section className={styles.social_networks}>
        <a className={styles.social_btn_instagram} href="#"><i class="fa-brands fa-instagram"></i></a>
        <a className={styles.social_btn_github} href="#"><i class="fa-brands fa-github-square"></i></a>
        <a className={styles.social_btn_linkedin} href="#"><i class="fa-brands fa-linkedin"></i></a>
    </section>
  
}

export default SocialNetworks