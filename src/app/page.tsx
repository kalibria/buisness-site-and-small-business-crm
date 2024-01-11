import Header from '@component/app/header/Header';
import backgroundImage from '/public/fitness-set-with-different-women_627156-435.png';
import smallBackgroundImage from '/public/images (7).jpeg'
import Image from 'next/image';
import styles from '@component/styles/mainPage.module.css'


export default function Home() {
  return (
    <main>
      {/*<div className={"absolute -z-10 inset-0"}>*/}
      {/*    <Image src={backgroundImage} alt={'sports girls'} fill style={{objectFit:'cover'}}/>*/}
      {/*</div>*/}
      <Header />
      <div className={'w-full h-screen bg-cyan-700'}>
        {/*<div className={'styles.bgImg'}>*/}
        {/*  /!*<Image src={smallBackgroundImage} alt={'trikonasana'} width={400} className={'absolute inset-y-1/3 left-96'}></Image>*!/*/}
        {/*</div>*/}
        <div className={'styles.bgGradient w-96 h-96'}></div>
        <div>Tekst</div>
        <button>Записаться на тренировку</button>
      </div>
    </main>
  )
}
