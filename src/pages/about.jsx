import styles from "../styles/pages/about.module.scss";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import {WorkComp} from "../components/workComp";
import { useEffect, useState, useRef } from "react";

export const About = () => {

    const [isNextPage, setIsNextPage] = useState(false);
    const [navPage, setNavPage] = useState("");
    const fadeRef = useRef(null);

    const [item, setItem] = useState("tutorial");

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
    const tutorialFunc = ()=>{setItem("tutorial");}
    const skillFunc = ()=>{setItem("skill");}
    const languageFunc = ()=>{setItem("language");}

    return (
        <>
            <FadeInOut
            isFadeOut = {isNextPage}
            ref = {fadeRef}
            />

            <div className="centerlize background">
                {/* Title */}
                <h1 className="default-title" style={{marginTop: '3em'}}>About</h1>  
                <img src="/images/components/underline.png" alt="" style={{width: '18em', height: '2px', marginTop: '-1.6em'}}/>

                {/* All conteiner */}
                <div className={styles.about_conteiner}>

                    {/* Itens list */}
                    <div className={"default-text " + styles.item_list}>
                        {(item === "tutorial" &&
                            <>
                                <p className={"default-title " + styles.selected}>Tutorial</p>
                                <Button
                                    text = "Skills"
                                    size = "1.5em"
                                    func = {skillFunc}
                                />
                                <Button
                                    text = "Languages"
                                    size = "1.5em"
                                    func = {languageFunc}
                                />
                            </>
                        )}
                        {(item === "skill" &&
                            <>
                                <Button
                                    text = "Tutorial"
                                    size = "1.5em"
                                    func = {tutorialFunc}
                                />
                                <p className={"default-title " + styles.selected}>Skills</p>
                                <Button
                                    text = "Languages"
                                    size = "1.5em"
                                    func = {languageFunc}
                                />
                            </>
                        )}
                        {(item === "language" &&
                            <>
                                <Button
                                    text = "Tutorial"
                                    size = "1.5em"
                                    func = {tutorialFunc}
                                />
                                <Button
                                    text = "Skills"
                                    size = "1.5em"
                                    func = {skillFunc}
                                />
                                <p className={"default-title " + styles.selected}>Languages</p>
                            </>
                        )}
                    </div>

                    {/* divider */}
                    <div className={styles.divider}></div>

                    {/* content */}
                    {(item === "tutorial" &&
                        <>
                            <p className="default-text">tutorial</p>
                        </>
                    )}
                    {(item === "skill" &&
                        <>
                            <p className="default-text">skills</p>
                        </>
                    )}
                    {(item === "language" &&
                        <>
                            <p className="default-text">language</p>
                        </>
                    )}

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