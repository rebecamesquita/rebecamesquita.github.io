import Button from './Button'
import styles from './ContactCTA.module.css'

function ContactCTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <p className={styles.text}>
          I&rsquo;d love to continue the conversation we started, whether it
          leads to a project, a collaboration, or something completely
          unexpected.
        </p>
        <div className={styles.actions}>
          <Button href="https://www.linkedin.com/" variant="light">
            Let&rsquo;s connect on LinkedIn
          </Button>
          <Button href="mailto:rebecamesquita2606@gmail.com" variant="lime">
            E-mail me
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
