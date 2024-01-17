import Image from 'next/image';
import liveClasses from '../../../../public/banner-liveklassen-workshoips-allgemein-2320x464.jpg.png'

const LiveClasses =() =>{
  return (
    <div>
      <h2>Finde Verbindung in Live-Klassen und -Workshops</h2>
      <p>Jede Woche kannst du in bis zu 7 Live-Klassen gemeinsam mit deinen Lieblingslehrer:innen und der YogaEasy-Community die Matte ausrollen. In Premium-Live-Workshops kannst du in besondere Themen zusätzlich tiefer einsteigen.</p>
      <div>
        <Image src={liveClasses} alt={'liveClasses'}/>
        <button>Zur Anmeldung</button>
      </div>
    </div>
  )
}

export default LiveClasses;
