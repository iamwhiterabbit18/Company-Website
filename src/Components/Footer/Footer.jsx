import icons from '../../assets/icons/icons';
import styles from './Footer.module.scss';
import { motion } from 'framer-motion';
const Footer = () => {
    return ( 
        <footer>
            <h2>Send Us a Message</h2>
            <div>
                {icons.map((icon) =>{
                    return (
                        <div>
                            <motion.a href="#"
                            whileHover={{y: -10, duration: 0.5}}>
                                <img src={icon.path} alt="" />
                            </motion.a>
                        </div>
                    )
                })}
            </div>
        </footer>
     );
}
 
export default Footer;