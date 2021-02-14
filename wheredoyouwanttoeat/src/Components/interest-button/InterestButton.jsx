import Button from 'react-bootstrap/Button';
import styles from './InterestButton.module.css';

const InterestButton = ({ buttonText, type, interestClass, onClick }) => {
  return (
    <Button type={type} onClick={onClick} className={interestClass === "btnDefault" ? styles.btnDefault : interestClass === "btnDefault.active" ? styles.clicked : styles.btnMainDefault}>{ buttonText }</Button> 
  )
}

export default InterestButton;