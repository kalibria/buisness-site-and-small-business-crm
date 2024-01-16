import Header from '@component/app/header/Header';
import FirstSection from '@component/app/firstSection/FirstSection';
import MainInfo from '@component/app/mainInfo/MainInfo';



export default function Home() {
  return (
    <>
      <Header />
      <main className={'w-full h-screen bg-cyan-700'}>
        <FirstSection/>
        <MainInfo/>
      </main>
    </>
  )
}
