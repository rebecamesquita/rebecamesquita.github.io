import Button from './Button'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>We just met at Digital Learning Week</h1>
        <p className={styles.subtitle}>
          If you made it here, it probably means our conversation was worth
          continuing.
        </p>
        <Button href="#contact" variant="dark">
          Let&rsquo;s keep talking!
        </Button>
      </div>
    </section>
  )
}

export default Hero
