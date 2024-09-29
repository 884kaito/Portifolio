import styles from "../styles/pages/options.module.scss";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import { useEffect, useState, useRef } from "react";

export const Options = () => {

    const [isNextPage, setIsNextPage] = useState(false);
    const [navPage, setNavPage] = useState("teste");
    const fadeRef = useRef(null);
    
    
    //vai para proxima pagina
    useEffect(()=>{
        if(isNextPage)
            fadeRef.current.fadeOut(navPage);
    }, [isNextPage, navPage])

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

            <div className={"centerlize background " + styles.container}>
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