import styles from "../styles/components/button.module.css";
import {useEffect, useRef} from 'react';

export const Button = (props) => {
    
    const text = props.text
    const func = props.func
    const buttonRef = useRef(null)

    // set button click function
    useEffect(()=>{
        const button = buttonRef.current
        if(button)
        {
            button.addEventListener('click', ()=>button.classList.add('clicked'))
            button.addEventListener('click', func)
        }
    }, [])
    
    return (
        <>
            <button ref={buttonRef} className={styles.default_button}>
                <img className={styles.appear_element} src='./images/components/button-hover.png' alt=""/>
                {text}
                <img className={styles.appear_element + " " + styles.rotate180} src='./images/components/button-hover.png' alt=""/>
            </button>
        </>
    )
}