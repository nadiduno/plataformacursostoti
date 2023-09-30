import React, { useState, useEffect } from 'react';
import { Button, Col, Form, InputGroup, Row, ListGroup, Modal, ButtonGroup } from 'react-bootstrap';
import { FilePlus, FileX, GithubLogo, InstagramLogo, LinkedinLogo, NotePencil, Plus, UserCircle, XSquare } from "phosphor-react"
import { ListLesson } from '../components/ListLesson';
import "../styles/HomePage.style.css"
import "../styles/Lesson.style.css"
import '../styles/Modal.style.css'

export const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [showAdicionar, setShowAdicionar] = useState(false);
  const [state, setState] = useState({ title: '', description: '' });
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    trazerLista();
  }, []);


  const trazerLista = () => {
    fetch('http://localhost:9000/api/lessons/published')
      .then(data => data.json())
      .then(resposta => {
        setLessons(resposta);
      })
      .catch(err => console.log('Erro de solicitação', err));
  };

  const adicionarLesson = () => {
    setShowAdicionar(true);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity()) { // caso de sucesso
      setLessons(anterior => {
        let lessonsAntigos = anterior;
        lessonsAntigos.push({ id: lessons.length + 1, title: state.title, description: state.description, teacher: state.teacher, typelesson: state.typelesson });
        return lessonsAntigos;
      });
      setShowAdicionar(false);
    }
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
  };

  const handleChange = e => {
    setState(anterior => {
      return {
        ...anterior,
        [e.target.name]: e.target.value
      }
    });
  };

  const buscarlesson = e => {
    fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then(data => data.json())
      .then(resposta => {
        setLessons(resposta.products);
      })
      .catch(err => console.log('Erro de solicitação', err));
  };


  return (
    <div className="containerMain">
      <div className="container">
        <aside className="sideBar">
          <img src="src\assets\LogoToti.svg" alt="" />
        </aside>
        <main className="containerCentral">
          <div>
            Sistema de Controle das Aulas
          </div>
          <div className="boxOrange">
            <div style={{ padding: '30px' }}>

              <button className="buttonViolet linkHover" style={{ width: '100%' }} onClick={adicionarLesson}>
                <NotePencil size={24} />
                Adicionar Aula
              </button>
              <InputGroup className="mb-3 pt-5">
                <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                <Form.Control
                  placeholder="Nome"
                  aria-label="nome"
                  aria-describedby="basic-addon1"
                  onChange={(e) => buscarlesson(e)}
                />
              </InputGroup>

              {
                lessons.length ? <ListLesson lista={lessons} /> : <></>
              }

              <Modal className="pageOpacity" show={showAdicionar} onHide={() => setShowAdicionar(false)} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                  <Modal.Title>Adicionar Aula</Modal.Title>
                </Modal.Header>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Modal.Body className="modalViolet">

                    <Form.Group>
                      <Form.Label>Título da aula</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          name="title"
                          type="text"
                          placeholder="Digite o título da aula por favor"
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Campo obrigatório.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="pt-3">
                      <Form.Label>Descrição da aula</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          name="description"
                          type="text"
                          placeholder="Digite a descrição da aula por favor"
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Campo obrigatório.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="pt-3">
                      <Form.Label>Nome do professor(a)</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          name="teacher"
                          type="text"
                          placeholder="Digite o nome do professor(a) por favor"
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Campo obrigatório.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="pt-3">
                      <Form.Label>Tipo da Aula: Gravada / Ao Vivo</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          name="typelesson"
                          type="text"
                          placeholder="Digite o tipo da aula por favor"
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Campo obrigatório.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="pt-3">
                      <Form.Label>Link da avaliação(a)</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          name="linkteste"
                          type="text"
                          placeholder="Digite o link da avaliação por favor"
                          onChange={handleChange}
                        // required
                        />
                        {/* <Form.Control.Feedback type="invalid">
                          Campo obrigatório.
                        </Form.Control.Feedback> */}
                      </InputGroup>
                    </Form.Group>

                  </Modal.Body>
                  <Modal.Footer>
                    <button className="buttonNone linkHover" style={{ color: 'var(--violet)' }} title="Criar">
                      <NotePencil size={50} />
                    </button>
                    <button className="buttonNone linkHover" onClick={() => setShowAdicionar(false)} style={{ color: 'var(--gray-4)' }} title="Cancelar">
                      <XSquare size={50} />
                    </button>
                  </Modal.Footer>
                </Form>
              </Modal>
              <div className="pt-5"></div>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <a
          href="https://totidiversidade.com.br/"
          target="_blank"
          className="linkHover"
        >
          Toti Diversidade
        </a>
        <span>Todos os direitos reservados  - 2023 </span>
        <div className="logoSocial">
          <a
            href="https://github.com/toti-edu"
            target="_blank"
            className="linkHover"
          >
            <GithubLogo size={30} />
          </a>
          <a
            href="https://www.instagram.com/toti.diversidade/?hl=pt-br"
            target="_blank"
            className="linkHover"
          >
            <InstagramLogo size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/toti-diversidade/"
            target="_blank"
            className="linkHover"
          >
            <LinkedinLogo size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
};


