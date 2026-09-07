import styles from './PinFeatures.module.css'

const FEATURES = [
  {
    label: 'Always there',
    text: "It's attached to my badge, so there's no piece of paper to hand over, lose or forget.",
  },
  {
    label: 'Part of the conversation',
    text: 'I can point to it naturally while we talk, no awkward pause to dig for a business card.',
  },
]

function PinFeatures() {
  return (
    <section className={styles.section}>
      <div className={styles.list}>
        {FEATURES.map((feature) => (
          <div key={feature.label} className={styles.item}>
            <h3 className={styles.label}>{feature.label}</h3>
            <div className={styles.card}>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PinFeatures
