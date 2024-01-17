import Image from 'next/image';
import meditation from '../../../../public/big_webp_meditation_traeume_ideen_visualisieren_still_02.jpg.webp.png';
import styles from './videoSection.module.css';
import clock from '../../../../public/clockIcon.png';
import level from '../../../../public/levelIcon.png';
import yogaPose from '../../../../public/yogaPose.png';
import level1 from '../../../../public/level1-2.png';
import girls from '../../../../public/girls.png'

const VideoSection = () =>{
  return (
    <section className={styles.videoSection}>
      <h2 className={'font-source text-headerTextColor text-3xl font-bold text-center'}>Yoga-Videos für jedes Level</h2>
      <p className={'font-source text-basicTextColor text-center text-lg my-2'}>Ob du gerade mit Yoga beginnst oder deine Praxis vertiefen möchtest: Mehr als 1.000 Yoga-Videos, Asana-Tutorials & Meditationen bieten die passende Yoga-Sequenz für Anfänger:innen und Fortgeschrittene</p>
      <div className={'flex justify-between'}>
        <div className={styles.card}>
          <Image src={meditation} alt={'meditation'}/>
          <div className={'mx-4'}>
            <p className={'mt-2 font-source text-basicTextColor text-lg '}>Annika Isterling</p>
            <span className={`${styles.card__description} + mt-2 font-source text-basicTextColor text-lg font-bold`}>Meditation zum Visualisieren deiner Träume und Ideen</span>

            <div className={styles.card__metadata}>
              <div className={styles.videoInfo}>
                <div className={'w-4 h-4 mr-0.5'}>
                  <Image src={clock} alt={'clock'}/>
                </div>

                <p className={'font-source text-basicTextColor text-lg'}>17 Min.</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg'}>Level: alle</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg mr-2.5'}>Anstrengung</p>
                <Image src={level} alt={'level'}/>
              </div>
          </div>


          </div>
        </div>

        <div className={styles.card}>
          <Image src={yogaPose} alt={'yogaPose'}/>
          <div className={'mx-4'}>
            <p className={'mt-2 font-source text-basicTextColor text-lg '}>Moritz Ulrich</p>
            <span className={`${styles.card__description} + mt-2 font-source text-basicTextColor text-lg font-bold`}>Jivamukti Daily Practice für den Morgen</span>
            <div className={styles.card__metadata}>
              <div className={styles.videoInfo}>
                <div className={'w-4 h-4 mr-0.5'}>
                  <Image src={clock} alt={'clock'}/>
                </div>

                <p className={'font-source text-basicTextColor text-lg'}>20 Min.</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg'}>Level: 1-2</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg mr-2.5'}>Anstrengung</p>
                <Image src={level1} alt={'level'}/>
              </div>
            </div>


          </div>
        </div>

        <div className={styles.card}>
          <Image src={girls} alt={'girls'}/>

          <div className={'mx-4'}>
            <p className={'mt-2 font-source text-basicTextColor text-lg '}>Nina Heitmann</p>
            <span className={`${styles.card__description} + mt-2 font-source text-basicTextColor text-lg font-bold`}>Natarajasana Flow</span>

            <div className={styles.card__metadata}>
              <div className={styles.videoInfo}>
                <div className={'w-4 h-4 mr-0.5'}>
                  <Image src={clock} alt={'clock'}/>
                </div>
                <p className={'font-source text-basicTextColor text-lg'}>38 Min.</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg'}>Level: 2</p>
              </div>
              <div className={styles.videoInfo}>
                <p className={'font-source text-basicTextColor text-lg mr-2.5'}>Anstrengung</p>
                <Image src={level1} alt={'level'}/>
              </div>
            </div>


          </div>
        </div>
      </div>

    </section>
  )
}

export default VideoSection;
