import {HEADER_LINKS} from '@component/app/constants/constants';
import Image from 'next/image';
import logo from '/public/logoNew.png';
import styles from './header.module.css';
import searchIcon from '/public/search.svg'

const Header = () => {
  return (
    <nav className={`${styles.headerWrapper} + flex justify-between items-center`}>
      <div className={styles.header}>
        <div>
          <Image src={logo} alt={'logo'} width={'80'} height={'87'}/>
        </div>
        <div>
          <ul className={'flex'}>
            {HEADER_LINKS.map((link)=>{
              return <li key={link} className={'mr-10 hover:underline decoration-teal-300 decoration-2'}>{link}</li>
            })}
          </ul>
        </div>

        <div className={'mr-10 w-28 h-8 flex items-center'}>
          <button className={`${styles.searchIcon} + w-5 h-5 mr-3 rounded-full`}><Image src={searchIcon} width={'6.19'} alt={'search'}/></button>
          <button className={`${styles.loginButton} + w-16 h-8 border-2 rounded-3xl `}>Login</button>

        </div>
      </div>

    </nav>
  )
}

export default Header;
