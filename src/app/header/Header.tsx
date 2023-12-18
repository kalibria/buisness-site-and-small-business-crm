import {HEADER_LINKS} from '@component/app/constants/constants';

const Header = () => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        {HEADER_LINKS.map((link)=>{
          return <li key={link}>{link}</li>
        })}
      </ul>
      <div>Tel.</div>
    </nav>
  )
}

export default Header;
