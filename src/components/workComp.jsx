import styles from "../styles/components/workComp.module.scss";
// import {useEffect, useRef} from 'react';

export const WorkComp = (props) => {
    
    const image = "URL("+ props.image + ")"
    const title = props.title
    const skill = props.skill
    const date = props.date

   
    console.log(image)
    return (
        <div className={styles.work}>
            <div className={styles.image} style={{backgroundImage: image}}/>
            <div className={styles.text_conteiner}>
                <p className={"default-text " + styles.text}>{title}</p>
                <p className={"default-text " + styles.text} style={{fontSize: "1em", margin: "0"}}>{skill}</p>
                <p className={"default-text " + styles.text} style={{fontSize: "1em"}}>{date}</p>
            </div>
        </div>
    )
}