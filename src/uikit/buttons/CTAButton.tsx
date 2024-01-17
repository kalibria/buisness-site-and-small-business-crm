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
    return '12px 36px'
  }

  if (size === 'medium') {
    return '10px 36px'
  }

  return '4px 36px'
}

export default CTAButton;
