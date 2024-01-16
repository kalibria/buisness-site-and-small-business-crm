import styles from '@component/app/mainInfo/mainInfo.module.css'
import YogaSiteInfo from '@component/app/mainInfo/yogaSiteInfo/YogaSiteInfo'
import VideoSection from '@component/app/mainInfo/videoSection/VideoSection';


const MainInfo = () =>{
  return (
    <div className={styles.allInfoWrapper}>
      <div className={styles.allInfo}>
        <YogaSiteInfo/>
        <VideoSection/>

      </div>
    </div>

  )
}

export default MainInfo;
