import "../styles/pages/home.css";
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
                <p className='default-title main-title'>Kaito Portfolio</p>
                <Button
                text = "Start"
                func = {nextPage}/>
            </div>
        </>
    )
}