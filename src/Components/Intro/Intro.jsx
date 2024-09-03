import img from '../../assets/arrow_home.png';
import styles from './Intro.module.scss';

const Intro = () => {

    const string = 'boosting growth with smart web solutions'.toUpperCase();

    return ( 
        <div className={styles.wrapper}>
            <div>
                <h1>{string}</h1>
                <button>Get Started</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
     );
}
 
export default Intro;