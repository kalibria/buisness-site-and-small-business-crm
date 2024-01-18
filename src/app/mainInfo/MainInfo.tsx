import styles from '@component/app/mainInfo/mainInfo.module.css'
import YogaSiteInfo from '@component/app/mainInfo/yogaSiteInfo/YogaSiteInfo'
import VideoSection from '@component/app/mainInfo/videoSection/VideoSection';
import CTAButton from '@component/uikit/buttons/CTAButton';
import LiveClasses from '@component/app/mainInfo/liveClasses/LiveClasses';
import Teachers from '@component/app/mainInfo/teachers/Teachers';
import YogaProgram from '@component/app/mainInfo/yogaProgramm/YogaProgram';


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
        <Teachers/>
        <YogaProgram/>
        <div className={'my-5 mx-auto h-12'}>
          <CTAButton size={'large'} />
        </div>


      </div>
    </div>

  )
}

export default MainInfo;
