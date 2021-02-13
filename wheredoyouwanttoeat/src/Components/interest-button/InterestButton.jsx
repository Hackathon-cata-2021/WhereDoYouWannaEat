import Button from 'react-bootstrap/Button';
import styles from './InterestButton.module.css';

const ButtonSpot = ({ buttonText, type }) => {
  return (
    <Button type={type} className={styles.btnDefault}>{ buttonText }</Button> 
  )
}

export default ButtonSpot;