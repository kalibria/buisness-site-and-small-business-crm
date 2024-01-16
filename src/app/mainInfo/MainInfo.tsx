import styles from '@component/app/mainInfo/mainInfo.module.css'
import YogaSiteInfo from '@component/app/mainInfo/yogaSiteInfo/YogaSiteInfo'
import VideoSection from '@component/app/mainInfo/videoSection/VideoSection';
import CTAButton from '@component/uikit/buttons/CTAButton';


const MainInfo = () =>{
  return (
    <div className={styles.allInfoWrapper}>
      <div className={styles.allInfo}>
        <YogaSiteInfo/>
        <VideoSection/>
        <div className={'mt-4 mx-auto h-12'}>
          <CTAButton/>
        </div>


      </div>
    </div>

  )
}

export default MainInfo;
