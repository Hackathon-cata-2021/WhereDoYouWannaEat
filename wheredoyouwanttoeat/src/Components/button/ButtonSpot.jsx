import Button from 'react-bootstrap/Button';
import styles from './ButtonSpot.module.css';

const ButtonSpot = ({ buttonText, type }) => {
  return (
    <Button type={type} className={styles.btnDefault}>{ buttonText }</Button> 
  )
}

export default ButtonSpot;