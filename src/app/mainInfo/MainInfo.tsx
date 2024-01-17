import styles from '@component/app/mainInfo/mainInfo.module.css'
import YogaSiteInfo from '@component/app/mainInfo/yogaSiteInfo/YogaSiteInfo'
import VideoSection from '@component/app/mainInfo/videoSection/VideoSection';
import CTAButton from '@component/uikit/buttons/CTAButton';
import LiveClasses from '@component/app/mainInfo/liveClasses/LiveClasses';


const MainInfo = () =>{
  return (
    <div className={styles.allInfoWrapper}>
      <div className={styles.allInfo}>
        <YogaSiteInfo/>
        <VideoSection/>
        <div className={'my-5 mx-auto h-12'}>
          <CTAButton size={'large'} />
        </div>
        <LiveClasses/>


      </div>
    </div>

  )
}

export default MainInfo;
