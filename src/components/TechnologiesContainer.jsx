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
        <i class="fa-brands fa-html5"></i>
          <div>
            <h3>HTML5</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.technology_card_css}>
      <i class="fa-brands fa-css3"></i>
          <div>
            <h3>CSS3</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.technology_card_js}>
      <i class="fa-brands fa-js"></i>
          <div>
            <h3>JavaScript</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.technology_card_react}>
      <i class="fa-brands fa-react"></i>
          <div>
            <h3>React</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
      <div className={styles.technology_card_sass}>
      <i class="fa-brands fa-sass"></i>
          <div>
            <h3>SASS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
      </div>
          </div>
  </section>;
}

export default TechnologiesContainer