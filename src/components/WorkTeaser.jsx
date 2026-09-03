import styles from './WorkTeaser.module.css'

function WorkTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.line}>
          Yes, I could have just sent you straight to my LinkedIn.
        </p>
        <p className={styles.big}>
          But I wanted the experience itself to show you a bit about how I
          think when I&rsquo;m designing
        </p>
        <p className={styles.line}>
          (so you&rsquo;re already experiencing a little piece of my work).
        </p>
      </div>
    </section>
  )
}

export default WorkTeaser
