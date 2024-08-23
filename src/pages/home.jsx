import styles from "../styles/pages/home.module.css";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import { useEffect, useState, useRef } from "react";

export const Home = () => {

    const [isNextPage, setIsNextPage] = useState(false);
    const fadeRef = useRef(null);

    //vai para proxima pagina
    const nextPage = ()=>{
        setIsNextPage(true);
    }

    useEffect(()=>{
        if(isNextPage)
            fadeRef.current.fadeOut('/options');
    }, [isNextPage])


    return (
        <>
            <FadeInOut
            isFadeOut = {isNextPage}
            ref = {fadeRef}
            />
            <div className="centerlize background">
                <p className={'default-title ' + styles.main_title}>Kaito Portfolio</p>
                <Button
                text = "Start"
                func = {nextPage}/>
            </div>
        </>
    )
}