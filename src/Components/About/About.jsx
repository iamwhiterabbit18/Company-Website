import styles from './About.module.scss';
import employees from '../../assets/employees/employees';
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    const cardVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const wrapperVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: 1.0,
                when: "beforeChildren",
            },
        },
    };

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView, mainControls]);

    return (
        <div className={styles.wrapper} ref={ref}>
            <motion.h1
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                Meet Our Team
            </motion.h1>

            <motion.div
                className={styles.cardWrapper}
                variants={wrapperVariants}
                initial="hidden"
                animate={mainControls}
            >
                {employees.map((employee) => (
                    <motion.div
                        className={styles.card}
                        key={employee.id}
                        variants={cardVariants}
                    >
                        <img src={employee.path} alt="" />
                        <h2 className={styles.lName}>{employee.lName}</h2>
                        <h2 className={styles.gName}>{employee.gName}</h2>
                        <p className={styles.pos}>{employee.pos}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default About;
