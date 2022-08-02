import styles from '../../styles/technologioscontainer.module.sass'

/* const technologies = [
  {id: "html", name: "HTML5", icon: <i class="fa-brands fa-html5"></i>},
  {id: "css", name: "CSS3", icon: <i class="fa-brands fa-css3"></i>},
  {id: "js", name: "JavaScript", icon: <i class="fa-brands fa-js"></i>},
  {id: "react", name: "React", icon: <i class="fa-brands fa-react"></i>},
  {id: "sass", name: "SASS", icon: <i class="fa-brands fa-sass"></i>},
] */

const TechnologiesContainer = () => {
  return <section className={styles.technology_container}>
    <h2>Tecnologias</h2>
    <div className={styles.technology_grid}>
      <div className={styles.technology_card_html}>
        <i className="fa-brands fa-html5"></i>
        <h3>HTML</h3>
      </div>
      <div className={styles.technology_card_css}>
        <i className="fa-brands fa-css3"></i>
        <h3>CSS</h3>
      </div>
      <div className={styles.technology_card_js}>
        <i className="fa-brands fa-js"></i>
        <h3>JavaScript</h3>
      </div>
      <div className={styles.technology_card_react}>
        <i className="fa-brands fa-react"></i>
        <h3>React</h3>
      </div>
      <div className={styles.technology_card_sass}>
        <i className="fa-brands fa-sass"></i>
        <h3>SASS</h3>
      </div>
          </div>
  </section>;
}

export default TechnologiesContainer