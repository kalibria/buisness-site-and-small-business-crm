import Image from 'next/image';
import CTAButton from '../../uikit/buttons/CTAButton';
import styles from './firstSection.module.scss';
import photo from '../../../public/desktop@1x.jpg.png'

const FirstSection = () =>{
  return (
    <div className={styles.firstSection}>
      <div className={styles.colorBackground}>
        <div className={styles.firstSection_text}>
          <h1 className={'font-philosopher mb-4'}>Dein Online-Yogastudio</h1>
          <p className={'font-source font-bold text-lg mb-11'}>YogaEasy ist dein persönliches Online-Yogastudio für zu hause oder unterwegs. Mit YogaEasy kannst du ganz bequem Yoga üben - wann und wo immer du willst.</p>
          <CTAButton/>
        </div>
      </div>

        <div className={styles.imgBackground}>
          <Image src={photo} alt={'yoga'} priority width={'fill'}/>
        </div>
    </div>
  )
}

export default FirstSection;
