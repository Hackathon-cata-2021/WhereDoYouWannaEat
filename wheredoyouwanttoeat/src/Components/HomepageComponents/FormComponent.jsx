import styles from './FormComponent.module.css'

const FormComponent = () => {
    return(
        <div className={styles.formDiv}>
            <form>
                <label className='block'>
                    What is your age?
                </label>
                <input/>
                <label>
                    What is your partner's age?
                </label>
                <input/>
                <button>Find Your Date Today!</button>    
            </form>
        </div>
    )
}

export default FormComponent;