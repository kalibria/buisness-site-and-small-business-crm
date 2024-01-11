import Header from '@component/app/header/Header';
import FirstSection from '@component/app/firstSection/FirstSection';



export default function Home() {
  return (
    <>
      <Header />
      <main className={'w-full h-screen bg-cyan-700'}>
        <FirstSection/>
      </main>
    </>
  )
}
