import { useImperativeHandle, forwardRef } from "react";
import { useNavigate } from 'react-router-dom';
import styles from "../styles/components/fadeInOut.module.scss";

export const FadeInOut = forwardRef((props, ref) => {


    const navigate = useNavigate();

    const fadeOut = (navPage)=>{
        const conteiner = document.querySelector("."+styles.conteiner);
        conteiner.classList.add(styles.fadeOut);
        setTimeout(()=>navigate(navPage), 700);
    }

    useImperativeHandle(ref, ()=>({
        fadeOut,
    }));


    return(
        <>
            <div className={styles.conteiner}>

            </div>
        </>
    )
})