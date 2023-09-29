import React, { useState, useEffect } from 'react';
import { Accordion, Button, Form, ListGroup } from 'react-bootstrap';
import "../styles/Lesson.style.css"

export function Lesson() {
    const [lessons, setLessons] = useState([]);
    const [id, setId] = useState(null);
    const [lesson, setLesson] = useState(null);

    // Formulário para criar um lesson
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState(null);
    const [publicado, setPublicado] = useState(false);

    const [novaDescricao, setNovaDescricao] = useState(null);

    useEffect(() => {
        console.log('vai executar em qualquer evento da tela');
        // requisição, click de um botao que tem alguma ação, mudança no input
    });

    useEffect(() => {
        trazerLista();
    }, []); // só vai ser executado no primeiro load da página (carregar a primeira vez)

    useEffect(() => {
        console.log('titulo mudou');
    }, [titulo]); // vai ser executado sempre que a variável mudar de valor

    const trazerLista = () => {
        // fetch('https://dummyjson.com/products')
        fetch('http://localhost:9000/api/lessons/published')
            .then(data => data.json())
            .then(resposta => {

                console.log(resposta)
                setLessons(resposta);
            })
            .catch(err => console.log('Erro de solicitação', err));
    };

    const criarLesson = () => {
        const parametros = {
            title: titulo,
            description: descricao,
            published: publicado
        };

        fetch('http://localhost:9000/api/lessons', {
            method: "POST",
            body: JSON.stringify(parametros),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(data => data.json())
            .then(response => trazerLista())
            .catch(err => console.log(err));
    };

    const buscarPorID = () => {
        const URL = 'http://localhost:9000/api/lessons/' + id;
        fetch(URL)
            .then(data => data.json())
            .then(resposta => {
                if (resposta.title) {
                    setLesson(resposta);
                } else {
                    alert(resposta.message)
                }
            })
            .catch(err => console.log('Erro de solicitação', err));
    };

    const deletarPorID = () => {
        const URL = 'http://localhost:9000/api/lessons/' + id;
        fetch(URL, {
            method: "DELETE"
        })
            .then(data => data.json())
            .then(response => trazerLista())
            .catch(err => console.log(err));
    };

    const atualizarPorID = () => {
        const URL = 'http://localhost:9000/api/lessons/' + id;
        const atualizarlesson = {
            description: novaDescricao
        };
        fetch(URL, {
            method: "PUT", // PATCH
            body: JSON.stringify(atualizarlesson),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(data => data.json())
            .then(response => trazerLista())
            .catch(err => console.log(err));
    };

    return (
        <div style={{ padding: '30px' }}>

            <Accordion defaultActiveKey="0" flush alwaysOpen>
                <Accordion.Item eventKey="0" title="Clique-me para abrir e fechar o acordeon">
                    <Accordion.Header>Adicionar Produto</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Produto</Form.Label>
                            <Form.Control style={{ width: '20rem' }} type="text" onChange={(e) => setTitulo(e.target.value)} placeholder="Escrever um nome para o produto" />
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control style={{ width: '20rem' }} type="text" onChange={(e) => setDescricao(e.target.value)} placeholder="Escrever descrição para o produto" />
                            <Form.Check type="checkbox" onClick={(e) => setPublicado(e.target.checked)} label="Publicado" />
                            <Button onClick={criarLesson}>Criar</Button>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" title="Clique-me para abrir e fechar o acordeon">
                    <Accordion.Header>Atualizar Produto</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID</Form.Label>
                            <Form.Control style={{ width: '20rem' }} type="number" onChange={(e) => setId(e.target.value)} placeholder="Escrever o ID do produto" />
                            <Form.Label>Nova Descrição</Form.Label>
                            <Form.Control style={{ width: '20rem' }} type="text" onChange={(e) => setNovaDescricao(e.target.value)} placeholder="Escrever a nova descrição para o produto" />
                            <Button style={{ marginTop: '.5rem' }} onClick={atualizarPorID}>Atualizar</Button>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" title="Clique-me para abrir e fechar o acordeon">
                    <Accordion.Header>Eliminar Produto</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Eliminar por ID</Form.Label>
                            <Form.Control style={{ width: '20rem' }} type="number" onChange={(e) => setId(e.target.value)} placeholder="Escrever o ID do produto" />
                            <Button style={{ marginTop: '.5rem' }} onClick={deletarPorID}>Deletar</Button>
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <hr /><br /><br />
            <h3 style={{ color: "var(--color3)" }}>Listado de Aulas</h3>
            <br />
            <ListGroup>
                {
                    lessons.length ?
                        lessons.map(lesson => {
                            return <ListGroup.Item key={lesson.id}>{lesson.id} - {lesson.title} - {lesson.description}</ListGroup.Item>
                        })
                        : <div></div>
                }
            </ListGroup>
            <br /><br />
        </div >
    )
}