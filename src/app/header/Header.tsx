import {HEADER_LINKS} from '@component/app/constants/constants';
import Image from 'next/image';
import logo from '/public/logo.jpeg'

const Header = () => {
  return (
    <nav className={'flex justify-between mt-4 items-center'}>
      <div>
        <Image src={logo} alt={'logo'} width={'150'} />
      </div>
      <ul className={'flex justify-around'}>
        {HEADER_LINKS.map((link)=>{
          return <li key={link} className={'mr-10'}>{link}</li>
        })}
      </ul>
      <div className={'mr-10'}>Tel.</div>
    </nav>
  )
}

export default Header;
