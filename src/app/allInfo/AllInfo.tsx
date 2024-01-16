import styles from './allInfo.module.css'
import YogaSiteInfo from '@component/app/allInfo/yogaSiteInfo/YogaSiteInfo'

const AllInfo = () =>{
  return (
    <div className={styles.allInfoWrapper}>
      <div className={styles.allInfo}>
        <YogaSiteInfo/>

      </div>
    </div>

  )
}

export default AllInfo;
