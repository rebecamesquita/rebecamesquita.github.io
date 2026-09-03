import Arrow from './Arrow'
import styles from './SectionHeader.module.css'

function SectionHeader({ label, dark = true, accent = 'pink' }) {
  return (
    <div className={`${styles.header} ${dark ? styles.dark : styles.light}`}>
      <div className={`${styles.pill} ${styles[accent]}`}>
        <span>{label}</span>
        <Arrow className={styles.arrow} />
      </div>
    </div>
  )
}

export default SectionHeader
