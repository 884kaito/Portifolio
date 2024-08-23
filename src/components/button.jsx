import "../styles/components/button.css";
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
        else
            console.error("button with id '#button' not found")
    }, [])
    
    return (
        <>
            <button ref={buttonRef} className="default-button">
                <img className="appear-element" src='./images/components/button-hover.png' alt=""/>
                {text}
                <img className="appear-element rotate180" src='./images/components/button-hover.png' alt=""/>
            </button>
        </>
    )
}