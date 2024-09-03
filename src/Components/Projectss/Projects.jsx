import React, { useEffect } from "react";
import project from "../../assets/projectss/project";
import styles from "./Projects.module.scss";
const Projects = () => {
    const length = project.length;

    useEffect(() => {
        const last = document.querySelector('.project-card:last-child');
        length % 2 === 0 ? '' : last.style.transform = "translateX(50%)";
    }, [length]);

    return ( 
        <div className={styles.wrapper}>
            {
                project.map((project) => {
                    return (
                        <div className={styles.card + ' ' +'project-card'} key={project.id}>
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <div className={styles.img}>
                            <img src={project.path} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
     );
}
 
export default Projects;