import React, { useState, useEffect } from 'react';
import { Accordion, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';

export function LessonList() {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9000/api/lessons/published')
      .then((response) => response.json())
      .then((data) => setLessons(data))
      .catch((error) => console.error('Erro ao buscar lessons:', error));
  }, []);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          {selectedLesson && (
            <div>
              <h2>Vídeo</h2>
              <Player>
                <source src={selectedLesson.linkteste} />
              </Player>
            </div>
          )}
        </Col>
        <Col md={6}>
          <h2>Lista de Aulas</h2>
          <Accordion defaultActiveKey="0">
            {lessons.map((lesson, index) => (
              <Card key={index}>
                <Card.Header>
                  <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={index.toString()}
                    onClick={() => handleLessonClick(lesson)}
                  >
                    {lesson.title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index.toString()}>
                  <Card.Body>
                    <p>{lesson.description}</p>
                    <p>Professor: {lesson.teacher}</p>
                    <p>Tipo de Aula: {lesson.typelesson}</p>
                    <p>Publicado: {lesson.published ? 'Sim' : 'Não'}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

