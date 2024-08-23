import "../styles/pages/contact.css";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import { useEffect, useState, useRef } from "react";

export const Contact = () => {

    const [isNextPage, setIsNextPage] = useState(false);
    const [navPage, setNavPage] = useState("teste");
    const fadeRef = useRef(null);
    
    
    //vai para proxima pagina
    useEffect(()=>{
        if(isNextPage)
            fadeRef.current.fadeOut(navPage);
    }, [isNextPage])

    //funcoes das botoes
    const aboutFunc = ()=>{
        setNavPage('/about');
        setIsNextPage(true);
    }
    const workFunc = ()=>{
        setNavPage('/work');
        setIsNextPage(true);
    }
    const contactFunc = ()=>{
        setNavPage('/contact');
        setIsNextPage(true);
    }


    return (
        <>
            <FadeInOut
            isFadeOut = {isNextPage}
            ref = {fadeRef}
            />

            <div className="centerlize background option-conteiner">
                <h1 className="default-title">Contact</h1>  
                <img src="/images/components/underline.png" alt="" />
                <Button
                text = "About"
                func = {aboutFunc}/>
                <Button
                text = "Work"
                func = {workFunc}/>
                <Button
                text = "Contact"
                func = {contactFunc}/>
            </div>
        </>
    )
}