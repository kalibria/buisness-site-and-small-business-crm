import Image from 'next/image';
import yogaMan from '../../../../public/yogaman.png';
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
        <Image src={yogaMan} alt={'icon'}/>
        <h3 className={'font-source text-2xl font-bold text-headerTextColor'}>Die beliebtesten Yogastile</h3>
        <p className={'font-source text-text-lg text-basicTextColor text-center'}>Wähle aus mehr als zehn Yogastilen das Passende für dich.</p>
      </div>

      <div className={styles.yogaSiteBlockInfo}>
        <Image src={yogaMan} alt={'icon'}/>
        <h3 className={'font-source text-2xl font-bold text-headerTextColor'}>Die beliebtesten Yogastile</h3>
        <p className={'font-source text-text-lg text-basicTextColor text-center'}>Wähle aus mehr als zehn Yogastilen das Passende für dich.</p>
      </div>

    </div>
  )
}

export default YogaSiteInfo;
