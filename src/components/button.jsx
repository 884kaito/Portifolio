import styles from "../styles/components/button.module.scss";
import {useEffect, useRef} from 'react';

export const Button = (props) => {
    
    const text = props.text
    const func = props.func
    const isLink = props.isLink
    const link = props.link
    const size = props.size

    const buttonRef = useRef(null)

    // set button click function
    var i = 0;
    useEffect(()=>{
        if(i!==0) return
        i++

        const button = buttonRef.current
        if(isLink) 
            {
                button.addEventListener('click', ()=>window.open(link, '_blank')) //go to link
                buttonRef.current.style.fontSize = "1.25em";
                buttonRef.current.style.fontFamily = "'Gilda Display', serif";
            }
            else{
                button.addEventListener('click', ()=>button.classList.add('clicked')) //click animation
                button.addEventListener('click', func) //personalized function
                buttonRef.current.style.fontSize = "2em";
            }
        if(size)
            buttonRef.current.style.fontSize = size;
    }, [])
    
    return (
        <button ref={buttonRef} className={styles.default_button}>
            <img className={styles.appear_element} src='/images/components/button-hover.png' alt=""/>
            {text}
            <img className={styles.appear_element + " " + styles.rotate180} src='/images/components/button-hover.png' alt=""/>
        </button>
    )
}