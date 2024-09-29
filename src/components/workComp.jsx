import styles from "../styles/components/workComp.module.scss";
import {useEffect, useRef, useState} from 'react';

export const WorkComp = (props) => {
    
    const image = "URL("+ props.image + ")"
    const title = props.title
    const skill = props.skill
    const date = props.date
    const directory = props.directory
    const func = props.func

    const workRef = useRef(null)

    const changePage=()=>{
        func(directory)
    }
    
    var i = 0;
    useEffect(()=>{
        if(i!==0) return
        i++
        const work = workRef.current
        work.addEventListener('click', changePage)
    }, [])

    return (
        <div ref={workRef} className={styles.work}>
            <div className={styles.image} style={{backgroundImage: image}}/>
            <div className={styles.text_conteiner}>
                <p className={"default-text " + styles.text}>{title}</p>
                <p className={"default-text " + styles.text} style={{fontSize: "1em", margin: "0"}}>{skill}</p>
                <p className={"default-text " + styles.text} style={{fontSize: "1em"}}>{date}</p>
            </div>
        </div>
    )
}