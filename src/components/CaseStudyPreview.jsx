import { Link } from 'react-router-dom'
import ExternalArrow from './ExternalArrow'
import dmsThumb from '../assets/images/dms-thumb.png'
import styles from './CaseStudyPreview.module.css'

function CaseStudyPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.intro}>
          Speaking of which, feel free to check out the latest product with
          social and environmental impact I&rsquo;ve been working on lately:
        </p>
        <div className={styles.card}>
          <img
            src={dmsThumb}
            alt=""
            aria-hidden="true"
            className={styles.thumb}
          />
          <h3 className={styles.title}>Data Management System</h3>
          <p className={styles.tag}>Egalitarian &middot; Erasmus+ Project</p>
          <p className={styles.caption}>
            A mobile app that brings transparency and trust to how waste
            picker cooperatives in Brazil track and share their work.
          </p>
          <Link
            to="/case-studies/data-management-system"
            className={styles.link}
          >
            <span>Explore the case</span>
            <ExternalArrow className={styles.arrow} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CaseStudyPreview
