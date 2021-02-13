import styles from './FormComponent.module.css';
import InterestButton from '../interest-button/InterestButton';
import {useHistory} from 'react-router-dom';

const FormComponent = () => {
    
    let history = useHistory();

    const someRedirect = () => {
        history.push('/Interests');
    }
    
    return(
        <div className={styles.card}>
            <form>
                <p>
                    What is your age?
                </p>
                <input className='block'/>
                <br/>
                <br/>
                <p>
                    What is your partner's age?
                </p> 
                <input className='block'/>
                <br/>
                <br/>
                <InterestButton onClick={someRedirect} buttonText="Submit Today!" type="Submit" />
            </form>
        </div>
    )
}

export default FormComponent;