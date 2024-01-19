import Image from 'next/image';
import voiceTraining from '../../../../public/large_webp_stimme-persoenlichkeit-irina-valentin-alex-xenia-bluhm-yogaeasy-header__1_.jpg.webp.png';
import vector from '../../../../public/Vector.png';
import grounding from '../../../../public/large_webp_motiv_thema-lehrerin-yogaeasy-header-.jpg.webp.png';
import earth from '../../../../public/large_webp_element-erde-vertrauen-sicherheit-anna-rech-xenia-bluhm-yogaeasy-header.jpg.webp.png';
import styles from './yogaMagazin.module.css'

const YogaMagazin = () =>{
  return (
    <div>
      <h2>Die ganze Welt des Yoga im Yoga-Magazin</h2>
      <p>Hier erfährst du alles über die ganzheitliche Wirkung der Yoga-Übungen, Meditation, Achtsamkeit, Yoga-Philosophie und vieles mehr!</p>
      <div className={'flex justify-around'}>
        <div className={styles.magazin_card}>
          <Image src={voiceTraining} alt={'voiceTraining'} />
          <div className={styles.card_description}>
            <h4 className={styles.description_text}>Stimmtraining: Wie du die Stimme im Yoga einsetzt</h4>
            <div className={styles.description_name}>
              <p>Zum Artikel</p>
              <div className={'w-3 h-3 ml-1.5'}>
                <Image src={vector} alt={'vector'}/>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.magazin_card}>
          <Image src={grounding} alt={'grounding'} />
          <div className={styles.card_description}>
            <h4 className={styles.description_text}>Erdung: Nicht die Bodenhaftung verlieren!</h4>
            <div className={styles.description_name}>
              <p>Zum Artikel</p>
              <div className={'w-3 h-3 ml-1.5'}>
                <Image src={vector} alt={'vector'}/>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.magazin_card}>
          <Image src={earth} alt={'earth'} />
          <div className={styles.card_description}>
            <h4 className={styles.description_text}>Element Erde – Vertrauen, Sicherheit, Stabilität</h4>
            <div className={styles.description_name}>
              <p>Zum Artikel</p>
              <div className={'w-3 h-3 ml-1.5'}>
                <Image src={vector} alt={'vector'}/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )

}

export default YogaMagazin;
