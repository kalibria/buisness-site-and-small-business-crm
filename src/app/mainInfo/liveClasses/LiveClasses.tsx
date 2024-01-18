import Image from 'next/image';
import liveClasses from '../../../../public/banner-liveklassen-workshoips-allgemein-2320x464.jpg.png';
import styles from './liveClasses.module.css'

const LiveClasses =() =>{
  return (
    <div>
      <h2>Finde Verbindung in Live-Klassen und -Workshops</h2>
      <p>Jede Woche kannst du in bis zu 7 Live-Klassen gemeinsam mit deinen Lieblingslehrer:innen und der YogaEasy-Community die Matte ausrollen. In Premium-Live-Workshops kannst du in besondere Themen zusätzlich tiefer einsteigen.</p>
      <div className={'mt-5 relative'}>
        <Image src={liveClasses} alt={'liveClasses'}/>
        <button className={styles.liveClassBtn}>Zur Anmeldung</button>
      </div>
    </div>
  )
}

export default LiveClasses;
