import badgePhoto from '../assets/images/badge-photo.png'
import styles from './PhotoBand.module.css'

function PhotoBand() {
  return (
    <div className={styles.band}>
      <img src={badgePhoto} alt="" aria-hidden="true" />
    </div>
  )
}

export default PhotoBand
