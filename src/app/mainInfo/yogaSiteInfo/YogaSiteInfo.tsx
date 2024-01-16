import Image from 'next/image';
import yogaMan from '../../../../public/yogaman.png';
import videoIcon from '../../../../public/videoIcon.png';
import yogaIcon from '../../../../public/yogaIcon.png';
import badge from '../../../../public/ausgezeichnet-badge.png.png'
import styles from './yogaSite.module.css'

const YogaSiteInfo = () =>{
  return (
    <div className={styles.yogaSiteWrapper}>
      <div className={styles.yogaSiteBlockInfo}>
        <div className={styles.icon}>
          <Image src={yogaMan} alt={'icon'}/>
        </div>

        <h3 className={'font-source text-2xl font-bold text-headerTextColor'}>Die beliebtesten Yogastile</h3>
        <p className={'font-source text-text-lg text-basicTextColor text-center'}>Wähle aus mehr als zehn Yogastilen das Passende für dich.</p>
      </div>

      <div className={styles.yogaSiteBlockInfo}>
        <Image src={videoIcon} alt={'videoIcon'}/>
        <h3 className={'font-source text-2xl font-bold text-headerTextColor'}>Wöchentlich neue Videos</h3>
        <p className={'font-source text-text-lg text-basicTextColor text-center'}>Jede Woche neue Videos und nie aus der Übung kommen.</p>
      </div>

      <div className={`${styles.yogaSiteBlockInfo} + max-w-sm`}>
        <Image src={yogaIcon} alt={'yogaIcon'}/>
        <h3 className={'font-source text-2xl font-bold text-headerTextColor'}>Unverbindlich testene</h3>
        <div className={'flex'}>
          <Image src={badge} alt={'badge'} width={99} height={90}/>
          <p className={'font-source text-text-lg text-basicTextColor text-center'}>Keine Kündigung notwendig. Dein Testzeitraum endet automatisch.</p>
        </div>

      </div>

    </div>
  )
}

export default YogaSiteInfo;
