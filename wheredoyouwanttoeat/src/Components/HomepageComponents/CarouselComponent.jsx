import FormComponent from '../HomepageComponents/FormComponent';
import Carousel from 'react-bootstrap/Carousel'
import styles from './CarouselComponent.module.css'
import image1 from '../../Resources/Images/image1.png'
import image2 from '../../Resources/Images/image2.png'
import image3 from '../../Resources/Images/image3.png'

const CarouselComponent = () => {
    return(
        <div className={styles.body}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <FormComponent/>
        </div>
    );
}

export default CarouselComponent;