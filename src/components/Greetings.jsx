import styles from './Greetings.module.css'

const GREETINGS = [
  'hello',
  'olá',
  '안녕하세요',
  'salut',
  'مرحبًا!',
  '你好',
  'hallo',
  '¡hola!',
]

function Greetings() {
  return (
    <section className={styles.section} aria-label="Hello, in many languages">
      {GREETINGS.map((greeting, i) => (
        <span key={greeting} className={styles.chip} data-alt={i % 2 === 1}>
          {greeting}
        </span>
      ))}
    </section>
  )
}

export default Greetings
