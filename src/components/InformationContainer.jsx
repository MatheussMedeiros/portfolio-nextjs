import styles from '../../styles/informationcontainer.module.sass'

const InformationContainer = () => {
  return <section className={styles.information}>
    <div className={styles.info_card_phone}>
        <i class="fa-solid fa-phone"></i>     
        <div>
            <h3>Telefone</h3>
            <p>(62)9 9638-5981</p>
        </div>
    </div>
    <div className={styles.info_card_mail}>
        <i class="fa-solid fa-envelope"></i>
        <div>
            <h3>E-mail</h3>
            <p>matemade@gmail.com</p>
        </div>
    </div>
    <div className={styles.info_card_pin}>
        <i class="fa-solid fa-location-dot"></i>    
        <div>
            <h3>Localização</h3>
            <p>Goiânia - Go</p>
        </div>
    </div>
  </section>
}

export default InformationContainer