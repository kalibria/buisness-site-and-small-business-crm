import Image from 'next/image';
import yogaImage from '../../../../public/yogaPoseonTheHand.png'

const YogaProgram =() =>{
  return (
    <div>
      <h2>Yoga-Programme für deine persönlichen Ziele</h2>
      <p>Du möchtest eine Yoga-Morgenroutine aufbauen, mit dem Meditieren beginnen, Stress abbauen oder deine Rückenschmerzen lindern? Wähle aus über 50 Programmen jederzeit das passende für dich.</p>
      <Image src={yogaImage} alt={'yogaImage'} className={'mt-5'}/>
    </div>
  )
}

export default YogaProgram
