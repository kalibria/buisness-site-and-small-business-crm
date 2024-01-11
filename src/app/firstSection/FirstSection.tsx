import Image from 'next/image';
import styles from './firstSection.module.scss';
import photo from '../../../public/desktop@1x.jpg.png'

const FirstSection = () =>{
  return (
    <div>
      <div className={styles.colorBackground}/>
      <div className={styles.imgBackground}>
        <Image src={photo} alt={'yoga'} priority width={'fill'}/>
      </div>
    </div>
  )
}

export default FirstSection;
