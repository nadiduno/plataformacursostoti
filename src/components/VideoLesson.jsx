import React, { useState, useEffect } from 'react'
import 'video-react/dist/video-react.css';


import { ListVideo } from './ListVideo'
import { FooterPage } from "./FooterPage";
import { Siderbar2 } from "./Sidebar";
import { TitlePage } from "./TitlePage";

import '../styles/VideoLesson.style.css'


export function VideoLesson() {
    const [lessons, setLessons] = useState([]);
    useEffect(() => {
        trazerLista();
    }, []);

    const trazerLista = async () => {
        await fetch('http://localhost:9000/api/lessons/published')
            .then(data => data.json())
            .then(resposta => {
                setLessons(resposta);
            })
            .catch(err => console.log('Erro de solicitação', err));
    };

    return (
        <div className='containerMain'>
            <div className='container'>
                <Siderbar2 />
                <main>
                    <TitlePage text='Full Stack' />
                    <div className="boxOrange">
                        <div className='textVideo'>
                            <h2>Lembrete</h2>
                            <p>Fazer anotações e responder a avaliação pós aula.</p>
                        </div>
                        {
                            lessons.length ? <ListVideo lista={lessons} /> : <></>
                        }
                    </div>
                </main>
            </div>
            <FooterPage />
        </div>
    );
}
