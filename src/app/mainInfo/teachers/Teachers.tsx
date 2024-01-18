import Image from 'next/image';
import teacherIcon from '../../../../public/teacherIcon.png';
import nicole from '../../../../public/nicole-bongartz.jpg.png';
import valentin from '../../../../public/valentin-alex.jpg.png';
import annika from '../../../../public/annika-isterling.jpg.png';
import christina from '../../../../public/christina-lobe.jpg.png';
import styles from './teachers.module.css'


const Teachers = () =>{
  return (
    <div className={styles.teachersSection}>
      <Image src={teacherIcon} alt={'Teachers'} className={styles.teachersSection_icon}/>
      <h2>Übe mit den besten Lehrer:innen Deutschlands</h2>
      <p>Lass dich von unseren erfahrenen und renommierten Yogalehrer:innen auf deiner Reise begleiten. Tauche in deinem Tempo in die Praxis und Philosophie des Yoga ein.</p>

      <div className={styles.teachersSection_teachers}>

        <div className={styles.teachers_card}>
          <Image src={nicole} alt={'Nicole'}/>
          <h4>Nicole Bongartz</h4>
          <p>Verzaubert durch ihre kreativen Flows</p>
        </div>

        <div className={styles.teachers_card}>
          <Image src={valentin} alt={'Valentin'}/>
          <h4>Valentin Alex</h4>
          <p>Kraftvoll inspirierende Vinyasa Flows mit viel Lebensfreude</p>
        </div>

        <div className={styles.teachers_card}>
          <Image src={annika} alt={'Annika'}/>
          <h4>Annika Isterling</h4>
          <p>Einfühlsame Yogastunden mit präziser Anleitung</p>
        </div>

        <div className={styles.teachers_card}>
          <Image src={christina} alt={'Christina'}/>
          <h4>Christina Lobe</h4>
          <p>Klar und sanft angeleitete Anusara Stunden, die unter die Haut gehen</p>
        </div>

      </div>
    </div>
  )
}

export default Teachers;
