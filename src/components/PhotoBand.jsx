import dmsThumb from '../assets/images/dms-thumb.png'
import styles from './PhotoBand.module.css'

function PhotoBand() {
  return (
    <div className={styles.band}>
      <img src={dmsThumb} alt="" aria-hidden="true" className={styles.photo} />
    </div>
  )
}

export default PhotoBand
