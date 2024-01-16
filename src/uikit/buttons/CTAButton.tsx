import styles from './ctaButton.module.css'

const CTAButton = () =>{
  return <button>
    <p className={`${styles.ctaButton} + font-source font-semibold`}>25% Rabatt für dich ››</p>
  </button>
}

export default CTAButton;
