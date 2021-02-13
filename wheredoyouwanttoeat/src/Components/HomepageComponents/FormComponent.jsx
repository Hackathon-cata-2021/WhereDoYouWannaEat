import styles from './FormComponent.module.css';
import InterestButton from '../interest-button/InterestButton';

const FormComponent = () => {
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
                <InterestButton buttonText="Submit Today!" type="Submit" />
            </form>
        </div>
    )
}

export default FormComponent;