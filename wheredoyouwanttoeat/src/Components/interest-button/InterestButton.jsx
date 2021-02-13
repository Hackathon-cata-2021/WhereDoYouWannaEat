import Button from 'react-bootstrap/Button';
import styles from './InterestButton.module.css';

const InterestButton = ({ buttonText, type, onClick }) => {
  return (
    <Button type={type} onClick={onClick} className={styles.btnDefault}>{ buttonText }</Button> 
  )
}

export default InterestButton;