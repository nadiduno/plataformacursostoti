import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { YoutubeLogo } from 'phosphor-react';

import '../styles/ListVideo.style.css'


export const ListVideo = (props) => {
    const [selectedLesson, setSelectedLesson] = useState(null);

    const showContainerVideo = (lesson) => {
        setSelectedLesson(lesson);
    };

    return (

        <div className='ContainerVideo'>
            <div className='videoYoutube'>
                {selectedLesson && (
                    <div >
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            controls
                            url={selectedLesson.linkteste}
                        />
                    </div>
                )}
            </div>
            <aside className='containerLessons'>
                <ListGroup>
                    {props.lista.map((lesson) => (
                        <ListGroup.Item
                            action
                            onClick={() => showContainerVideo(lesson)}
                            style={{ border: 'none', backgroundColor: 'transparent' }}
                        >
                            <div key={lesson.id} className='detailsLesson'>
                                <div>
                                    <YoutubeLogo size={24} style={{ color: 'var(--orange)' }} alt='Logo de Youtube, é um play em silhueta'/>
                                </div>
                                <div>
                                    <div className='titleLesson'>{lesson.title}</div>
                                    <div className='typeLesson'>{lesson.typelesson}</div>
                                    <div className='descriptionLesson'>{lesson.description}</div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    
                    ))}
            </ListGroup>
        </aside>

        </div >
    );
};
