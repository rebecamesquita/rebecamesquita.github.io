import { Link } from 'react-router-dom'
import Arrow from '../components/Arrow'
import PhotoBand from '../components/PhotoBand'
import SectionHeader from '../components/SectionHeader'
import ScreensCarousel from '../components/ScreensCarousel'
import ContactCTA from '../components/ContactCTA'
import styles from './DMSCaseStudy.module.css'
import React from 'react'

const CHALLENGES = [
  'Designing an approachable experience for users with different levels of literacy and digital familiarity.',
  'Gamification that encourages productivity without reinforcing a high-pressure environment.',
  "Balancing the needs of managers and cooperative members, whose priorities weren't always aligned.",
  'Building trust in a system that would replace informal, familiar processes with a new digital tool.',
]

const DECISIONS = [
  {
    title: 'Gamification that recognizes participation, not competition',
    text: 'Managers initially expected individual rankings to increase productivity. But research suggested this could reinforce existing pressure and competition instead. The solution uses rewards and collective progress rather than punishment or individual rankings.',
  },
  {
    title: 'Connection without surveillance',
    text: "Individual production data stays private. Instead, profiles let members share interests and achievement badges — creating opportunities for connection, especially for newcomers who reported difficulty integrating into the cooperative.",
  },
  {
    title: "Designed around the users' real workflow",
    text: 'Materials are shown through real images and organized by the categories members already use, like PET, PP, and PEAD — helping newcomers recognize the materials they handle daily.',
  },
  {
    title: 'Familiarity & simplicity',
    text: 'The information architecture reduces the number of screens and avoids the complexity of a traditional dashboard. The interface draws inspiration from social media platforms to lower the learning curve.',
  },
  {
    title: 'From individual records to collective visibility',
    text: 'General production data, previously accessible only to managers, becomes visible to all cooperative members. This increases transparency around collective performance.',
  },
]

const ScrollToTopOnMount = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return null
}

function DMSCaseStudy() {
  return (
    <main>
      <ScrollToTopOnMount />
      <Link to="/" className={styles.back}>
        <Arrow className={styles.backArrow} />
        <span>Go back</span>
      </Link>

      <PhotoBand />

      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.tag}>Egalitarian &middot; Erasmus+ Project</p>
          <h1 className={styles.title}>Data Management System</h1>
          <p className={styles.body}>
            DMS is a mobile app designed to improve the transparency and
            organization of individual and collective production data in
            waste picker cooperatives in Brazil. The existing monitoring
            system relies on spreadsheets, notebooks, and photos of weighing
            scales shared through messaging apps &rarr; a process prone to
            errors and inconsistencies. The initial goal was to improve data
            accuracy and the reliability of information shared with
            government stakeholders. However, user research revealed deeper
            challenges around trust, transparency, collaboration, and working
            conditions. This shifted the product goal: from simply organizing
            productivity data to designing a system that also supports a more
            transparent, collaborative, and trusting work environment.
          </p>
        </div>
      </section>

      <SectionHeader label="biggest challenges" dark />

      <section className={styles.challenges}>
        <div className={styles.challengesGrid}>
          {CHALLENGES.map((text, i) => (
            <div key={i} className={styles.challengeCard}>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <ScreensCarousel />

      <SectionHeader label="design decisions" dark accent="lime" />

      <section className={styles.decisions}>
        <div className={styles.decisionsInner}>
          {DECISIONS.map((decision) => (
            <div key={decision.title} className={styles.decision}>
              <h3 className={styles.decisionTitle}>{decision.title}</h3>
              <p className={styles.decisionText}>{decision.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  )
}

export default DMSCaseStudy
