import styles from "../styles/pages/workDetail.module.scss";
import {Button} from "../components/button";
import {FadeInOut} from "../components/fadeInOut";
import { useEffect, useState, useRef } from "react";
import {useParams} from 'react-router-dom';

export const WorkDetail = () => {
    
    const [isNextPage, setIsNextPage] = useState(false);
    const [navPage, setNavPage] = useState("");
    const fadeRef = useRef(null);
    
    //vai para proxima pagina
    useEffect(()=>{
        if(isNextPage)
            fadeRef.current.fadeOut(navPage);
    }, [isNextPage])
    
    
    //funcoes das botoes
    const backFunc = ()=>{
        setNavPage(-1);
        setIsNextPage(true);
    }
    

    const {workName} = useParams();
    const [work, setWork] = useState(null);
    //pegando dados do work 
    useEffect(()=>{
        fetch('/datas/workData.json')
            .then(response => response.json())
            .then(data => {
                const workDetail = data[workName];
                setWork(workDetail);
            })
            .catch(err => {
                console.error("Error fetching the work data:", err);
                setWork(null);
            })
    }, [workName]);

    //caso nao achar
    if(!work){
        return <h2>Work not found</h2>;
    }
    
    //se achar
    return (
        <>
            <FadeInOut
                isFadeOut = {isNextPage}
                ref = {fadeRef}
            />
            
            
            <div className="centerlize background">
                {/* Works */}
                <h1 className="default-title" style={{marginTop: '3em'}}>{work.short_title}</h1>  
                <img src="/images/components/underline.png" alt="" style={{width: '30em', height: '2px', marginTop: '-1.6em'}}/>
                <div className={"default-scrollbar " + styles.work_conteiner}>
                    <img src={work.image} className={styles.image} alt="" />
                    <div className={styles.text_conteiner}>
                        <p className={"default-text " + styles.text_style} style={{marginTop: "3em"}}>PERIOD: {work.period}</p>
                        <p className={"default-text " + styles.text_style} style={{marginBottom: "2em"}}>COLLABORATION: {work.collaboration}</p>
                        {work.description.map((line) => (
                            <p className={"default-text " + styles.description_style}>{line}</p>
                        ))}
                    </div>
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