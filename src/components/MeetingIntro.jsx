import styles from './MeetingIntro.module.css'

function MeetingIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.body}>
          At events like this, we meet incredible people and promise to stay
          in touch but it ends with only one more LinkedIn connection that
          eventually gets lost in the feed.
        </p>
        <div className={styles.headlineRow}>
          <span className={styles.accent} aria-hidden="true" />
          <h2 className={styles.headline}>
            How can I make the conversation we just had last beyond this
            moment?
          </h2>
        </div>
        <p className={styles.body}>
          I realised I had to do something different. So instead of handing
          you a card with my LinkedIn and portfolio, I turned my event badge
          into a pin button.
        </p>
      </div>
    </section>
  )
}

export default MeetingIntro
