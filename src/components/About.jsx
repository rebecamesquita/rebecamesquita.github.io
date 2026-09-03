import aboutPhoto from '../assets/images/about-photo.png'
import aboutVector from '../assets/icons/about-vector.svg'
import styles from './About.module.css'

function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.photoWrap}>
        <img src={aboutPhoto} alt="Rebeca Mesquita" className={styles.photo} />
        <img
          src={aboutVector}
          alt=""
          aria-hidden="true"
          className={styles.vector}
        />
      </div>
      <div className={styles.inner}>
        <h2 className={styles.name}>Rebeca Mesquita</h2>
        <p className={styles.bio}>
          I&rsquo;m a UX/Product Designer completing my Communication degree
          and serving as a UNESCO Chair Fellow, where I research AI and
          futures literacy. I&rsquo;m passionate about designing products
          that help us imagine and build better futures, creating a positive
          social and environmental impact :)
        </p>
      </div>
    </section>
  )
}

export default About
