import React, { useState} from 'react';
import { ListGroup } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import '../styles/ListVideo.style.css'
import {  YoutubeLogo } from 'phosphor-react';

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
                        <ReactPlayer controls url={selectedLesson.linkteste} playing={true} />
                    </div>
                )}
            </div>
            <aside className='containerLessons'>
                <ListGroup>
                    {props.lista.map((lesson) => (
                        <div key={lesson.id} style={{ display: 'flex' }}>
                            <YoutubeLogo  size={24} />
                            <ListGroup.Item
                                action
                                onClick={() => showContainerVideo(lesson)}
                            >
                                {lesson.title} 
                                <div className='typeLesson'>{lesson.typelesson}</div>
                                <div className='descriptionLesson'>{lesson.description}</div>
                            </ListGroup.Item>
                        </div>
                    ))}
                </ListGroup>
            </aside>

        </div>
    );
};
