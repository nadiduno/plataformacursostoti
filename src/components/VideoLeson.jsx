import React, { useState, useEffect } from 'react'
import { Form, InputGroup, Modal } from 'react-bootstrap'
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';


import { ListVideo } from './ListVideo'
import { FooterPage } from "./FooterPage";
import { Siderbar2 } from "./Sidebar";
import { TitlePage } from "./TitlePage";

import "../styles/Card.style.css"


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
                    <TitlePage text='Sistema de Controle das Aulas' />
                    <div className="boxOrange">
                        <div>
                            <div>
                                <h1>Lembrete</h1>
                                <p>Fazer anotações e responder a avaliação pós aula.</p>
                            </div>
                            <div>
                                {
                                    lessons.length ? <ListVideo lista={lessons} /> : <></>
                                }
                            </div>
                        </div>

                    </div>
                </main>
            </div>
            <FooterPage />
        </div>
    );
}
