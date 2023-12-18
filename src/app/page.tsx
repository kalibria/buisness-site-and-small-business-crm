import Header from '@component/app/header/Header';
import backgroundImage from '/public/fitness-set-with-different-women_627156-435.png'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className={"absolute -z-10 inset-0"}>
          <Image src={backgroundImage} alt={'sports girls'} fill style={{objectFit:'cover'}}></Image>
      </div>
      <Header />
      <div>Tekst</div>
      <button>Записаться на тренировку</button>
    </main>
  )
}
