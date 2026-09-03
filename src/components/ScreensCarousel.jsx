import screenCheckin from '../assets/images/dms-screens/screen-checkin.png'
import screenGoals from '../assets/images/dms-screens/screen-goals.png'
import screenLeaderboard from '../assets/images/dms-screens/screen-leaderboard.png'
import screenNewRecord from '../assets/images/dms-screens/screen-new-record.png'
import screenMaterialSelection from '../assets/images/dms-screens/screen-material-selection.png'
import screenProfile from '../assets/images/dms-screens/screen-profile.png'
import styles from './ScreensCarousel.module.css'

const SCREENS = [
  {
    image: screenCheckin,
    alt: 'Check-in screen',
    caption:
      "A weekly check-in gives both members and managers visibility into attendance without feeling surveilled. A missed day stays neutral, not red: didn't gain, but didn't lose anything either.",
  },
  {
    image: screenGoals,
    alt: 'Cooperative goals and collective achievements screen',
    caption:
      'Production data is fully transparent: everyone sees how much the group is producing together. Goals are collective too, so hitting one unlocks a shared achievement.',
  },
  {
    image: screenLeaderboard,
    alt: 'Cooperative leaderboard screen',
    caption:
      "Monthly highlights celebrate top contributors without ranking everyone else. Recognition that doesn't punish those still catching up.",
  },
  {
    image: screenNewRecord,
    alt: 'New weighing record screen',
    caption:
      'Logging a collection takes three taps: material, photo, weight — designed to be fast enough to use in the middle of a shift.',
  },
  {
    image: screenMaterialSelection,
    alt: 'Material selection screen',
    caption:
      "Materials are shown as real photos, not labels or icons. This helps newcomers recognize what they're sorting on their very first day.",
  },
  {
    image: screenProfile,
    alt: 'Private profile screen',
    caption:
      "Achievements and interests are public, production numbers aren't. Recognition without surveillance.",
  },
]

function ScreensCarousel() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.scroller}>
          {SCREENS.map((screen) => (
            <div className={styles.item} key={screen.alt}>
              <img
                src={screen.image}
                alt={screen.alt}
                className={styles.screen}
              />
              <p className={styles.caption}>{screen.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScreensCarousel
