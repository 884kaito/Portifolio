import { useEffect, useImperativeHandle, forwardRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/components/fadeInOut.css";

export const FadeInOut = forwardRef((props, ref) => {


    const navigate = useNavigate();

    const fadeOut = (navPage)=>{
        const conteiner = document.querySelector(".conteiner");
        conteiner.classList.add("fadeOut");
        setTimeout(()=>navigate(navPage), 700);
    }

    useImperativeHandle(ref, ()=>({
        fadeOut,
    }));


    return(
        <>
            <div className="conteiner">

            </div>
        </>
    )
})