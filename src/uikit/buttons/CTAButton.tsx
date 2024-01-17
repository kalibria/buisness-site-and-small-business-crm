import styles from './ctaButton.module.css'

const CTAButton = ({size}) => {
  if (!size) {
    size = 'medium'
  }

  const btnStyle = {
    padding: getPadding(size),

  }

  return <button style={btnStyle} className={`${styles.ctaButton} font-source font-semibold`}>
    25% Rabatt für dich ››
  </button>
}

function getPadding(size: 'large' | 'medium' | 'small') {
  if (size === 'large') {
    return '16px 32px'
  }

  if (size === 'medium') {
    return '10px 32px'
  }

  return '4px 32px'
}

export default CTAButton;
