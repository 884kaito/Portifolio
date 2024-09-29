import styles from "../styles/pages/work.module.scss";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import {WorkComp} from "../components/workComp";
import { useEffect, useState, useRef } from "react";

export const Work = () => {

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
    const workFunc = (directory)=>{
        setNavPage('/workDetail/' + directory);
        setIsNextPage(true);
    }

    const [works, setWork] = useState(null);
    //pegando dados do work 
    useEffect(()=>{
        fetch('/datas/workData.json')
            .then(response => response.json())
            .then(data => {
                setWork(data);
            })
            .catch(err => {
                console.error("Error fetching the works data:", err);
                setWork(null);
            })
    }, []);

    //caso nao achar
    if(!works){
        return <h2>Work not found</h2>;
    }

    return (
        <>
            <FadeInOut
            isFadeOut = {isNextPage}
            ref = {fadeRef}
            />

            <div className="centerlize background">
                {/* Works */}
                <h1 className="default-title" style={{marginTop: '3em'}}>Work</h1>  
                <img src="/images/components/underline.png" alt="" style={{width: '18em', height: '2px', marginTop: '-1.6em'}}/>

                
                <div className={styles.work_conteiner}>
                    {Object.keys(works).map((key)=>{
                        const work = works[key]
                        return(
                            <WorkComp
                                image = {work.image}
                                title = {work.title}
                                skill = {work.skill}
                                date = {work.data}
                                directory = {work.directory}
                                func = {workFunc}
                            />
                        )
                    })}

                    {/* Colocado somente para teste */}
                    <WorkComp
                        image = "/images/works/work1.png"
                        title = "Landing Page for NGO Pão Fraterno"
                        skill = "React, HTML, CSS, JS"
                        date = "7/2024"
                    />
                    <WorkComp
                        image = "/images/works/work1.png"
                        title = "Landing Page for NGO Pão Fraterno"
                        skill = "React, HTML, CSS, JS"
                        date = "7/2024"
                    />

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