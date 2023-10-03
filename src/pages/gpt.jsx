import React, { useState, useEffect } from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import { Form, InputGroup, Modal } from 'react-bootstrap';

export const Lesson = () => {
  const [lessons, setLessons] = useState([]);
  const [showAdicionar, setShowAdicionar] = useState(false);
  const [state, setState] = useState({
    title: '',
    description: '',
    teacher: '',
    typelesson: '',
    linkteste: '', // Adicione o campo linkteste
  });
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

  const handleChange = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;

    if (form.checkValidity()) {
      criarLesson();
    }

    setValidated(true);
  };

  const criarLesson = () => {
    fetch('http://localhost:9000/api/lessons/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then(response => response.json())
      .then(data => {
        trazerLista();
        setShowAdicionar(false);
      })
      .catch(error => console.error('Erro ao criar lição:', error));
  };

  return (
    <div>
      <button
        className="buttonViolet buttonVioletBig linkHover"
        onClick={adicionarLesson}
      >
        <PlusCircle size={30} />
        Adicionar Aula
      </button>

      <Modal
        className="pageOpacity"
        show={showAdicionar}
        onHide={() => setShowAdicionar(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Aula</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body className="modalViolet">
            {/* Seus campos de formulário aqui */}
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

            {/* Outros campos de formulário aqui */}
          </Modal.Body>
          <Modal.Footer>
            <button
              className="buttonNone linkHover"
              onClick={() => setShowAdicionar(true)}
              style={{ color: 'var(--violet)' }}
              title="Criar"
            >
              <PlusCircle size={40} />
            </button>
            <button
              className="buttonNone linkHover"
              onClick={() => setShowAdicionar(false)}
              style={{ color: 'var(--gray-4)' }}
              title="Cancelar"
            >
              <XSquare size={40} />
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};




