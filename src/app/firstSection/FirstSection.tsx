import Image from 'next/image';
import styles from './firstSection.module.scss';
import photo from '../../../public/desktop@1x.jpg.png'

const FirstSection = () =>{
  return (
    <div className={styles.firstSection}>
      <div className={styles.colorBackground}>
        <div className={styles.firstSection_text}>
          <h1 className={'font-philosopher'}>Dein Online-Yogastudio</h1>
          <p className={'font-source'}>YogaEasy ist dein persönliches Online-Yogastudio für zu hause oder unterwegs. Mit YogaEasy kannst du ganz bequem Yoga üben - wann und wo immer du willst.</p>
          <div>
            <p>25% Rabatt für dich ››</p>
          </div>
        </div>
      </div>

        <div className={styles.imgBackground}>
          <Image src={photo} alt={'yoga'} priority width={'fill'}/>
        </div>
    </div>
  )
}

export default FirstSection;
