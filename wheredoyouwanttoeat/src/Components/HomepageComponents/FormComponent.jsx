import styles from './FormComponent.module.css';
import ButtonSpot from '../button/ButtonSpot';

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
                <ButtonSpot buttonText="Submit Today!" type="Submit" />
            </form>
        </div>
    )
}

export default FormComponent;