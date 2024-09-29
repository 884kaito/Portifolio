import styles from "../styles/pages/contact.module.scss";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import { useEffect, useState, useRef } from "react";

export const Contact = () => {

    const [isNextPage, setIsNextPage] = useState(false);
    const [navPage, setNavPage] = useState("");
    const fadeRef = useRef(null);
    
    
    //vai para proxima pagina
    useEffect(()=>{
        if(isNextPage)
            fadeRef.current.fadeOut(navPage);
    }, [isNextPage, navPage])

    //funcoes das botoes
    const backFunc = ()=>{
        setNavPage(-1);
        setIsNextPage(true);
    }

    return (
        <>
            <FadeInOut
            isFadeOut = {isNextPage}
            ref = {fadeRef}
            />

            <div className="centerlize background">
                {/* Contact */}
                <h1 className="default-title" style={{marginTop: '3em'}}>Contact</h1>  
                <img src="/images/components/underline.png" alt="" style={{width: '18em', height: '2px', marginTop: '-1.6em'}}/>

                {/* Link to sites */}
                <h2 className="default-subtitle" style={{marginTop: '3em'}}>Site</h2>
                <img src="/images/components/underline.png" alt="" style={{width: '12em', height: '2px', marginTop: '-1.6em'}}/>
                <div className={styles.buttonConteiner}>
                    <Button
                    text = "Github"
                    isLink = {true}
                    link = 'https://github.com/kaitokun'
                    />
                    <Button
                    text = "Linkedin"
                    isLink = {true}
                    link = 'https://www.linkedin.com/in/kaito-hayashi/'
                    />
                </div>

                {/* Go to email */}
                <h2 className="default-subtitle" style={{marginTop: '1em'}}>Email</h2>
                <img src="/images/components/underline.png" alt="" style={{width: '12em', height: '2px', marginTop: '-1.6em'}}/>
                <div className={styles.buttonConteiner}>
                    <Button
                    text = "kaito.hayashi@gmail.com"
                    isLink = {true}
                    link = 'mailto:kaito.hayashi@gmail.com'
                    />
                </div>
                
                {/* Telephone number */}
                <h2 className="default-subtitle" style={{marginTop: '1.2em'}}>Telephone</h2>
                <img src="/images/components/underline.png" alt="" style={{width: '12em', height: '2px', marginTop: '-1.6em'}}/>
                <div className={styles.buttonConteiner}>
                    <p className="default-text" style={{marginTop: '-0em'}}>(55) +11 91960-2002</p>
                </div>

                {/* Back button */}
                <div style={{marginTop: '3em'}}>
                    <Button
                    text = "Back"
                    func = {backFunc}/>
                </div>
                <img src="/images/components/underline.png" alt="" style={{width: '8em', height: '2px', paddingBottom: '3em'}}/>
            </div>
        </>
    )
}