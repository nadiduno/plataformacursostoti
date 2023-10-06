import React, { useState, useEffect } from 'react'
import { NotePencil, Trash, XSquare } from 'phosphor-react'
import { Form, InputGroup, ListGroup, Modal } from 'react-bootstrap'
import '../styles/Modal.style.css'

export const ListLesson = (props) => {
	const [showDetalhes, setShowDetalhes] = useState(false);
	const [showDeletar, setShowDeletar] = useState(false);
	const [linhaSelecionada, setLinhaSelecionada] = useState({});
	const [lista, setLista] = useState(props.lista);
	const [showAtualizar, setShowAtualizar] = useState(false);
	const [updateDescription, setUpdateDescription] = useState({ description: '' });

	const mostrarModalDetalhes = (lesson) => {
		setLinhaSelecionada(lesson);
		setShowDetalhes(true);
	};

	const mostrarModalDeletar = (lesson) => {
		setLinhaSelecionada(lesson);
		setShowDeletar(true);
	};

	const mostrarModalAtualizar = (lesson) => {
		setLinhaSelecionada(lesson);
		setShowAtualizar(true);
	};

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// 	const form = event.currentTarget;
	// 	if (form.checkValidity()) { // caso de sucesso
	// 		try {
	// 			// await criarLesson(state); // Passar o estado state como parâmetro
	// 			// trazerLista();
	// 			setShowAdicionar(false);
	// 		} catch (error) {
	// 			console.log('Erro ao criar aula', error);
	// 		}
	// 	}
	// 	setValidated(true);
	// };

	const handleChange = e => {
		setUpdateDescription(anterior => {
			return {
				...anterior,
				[e.target.name]: e.target.value
			}
		});
	};



	const deletarPorId = async () => {
		await fetch(`http://localhost:9000/api/lessons/${linhaSelecionada.id}`, {
			method: 'DELETE'
		})
			.then(data => data.json())
			.then(resposta => {
				setLista(listaAnterior => {
					return listaAnterior.filter(lesson => lesson.id !== linhaSelecionada.id);
				});
			})
			.catch(err => console.log('Erro de solicitação', err));
		setShowDeletar(false);
	};

	const atualizarPorId = async () => {
		const requestBody = {
		  description: updateDescription.description, 
		};
	  
		try {
		  const response = await fetch(`http://localhost:9000/api/lessons/${linhaSelecionada.id}`, {
			method: 'PATCH',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(requestBody),
		  });
	  
		  if (!response.ok) {
			throw new Error('Erro na solicitação');
		  }
	  
		  const data = await response.json();
		  console.log('Desc. Nova', updateDescription.description);
		  console.log('Id da aula', linhaSelecionada.id);
		  console.log('Resposta da solicitação PATCH:', data);
	  
		  setLista((listaAnterior) => {
			return listaAnterior.map((lesson) => {
			  if (lesson.id === linhaSelecionada.id) {
				return {
				  ...lesson,
				  description: updateDescription.description,
				};
			  }
			  return lesson;
			});
		  });
	  
		  setShowAtualizar(false);
		} catch (error) {
		  console.error('Erro de solicitação:', error);
		}
	  };
  
	  
	return (
		<>
			<ListGroup>
				{
					lista.map(lesson => {
						return (
							<div style={{ display: 'flex', margin: '16px 0' }}>
								<ListGroup.Item
									key={lesson.id}
									action
									onClick={() => mostrarModalDetalhes(lesson)}
								>
									{lesson.title}
									&nbsp;-&nbsp;
									{lesson.description}
									&nbsp;-&nbsp;
									{lesson.typelesson}
								</ListGroup.Item>
								&nbsp;
								<button className="buttonNone linkHover" onClick={() => mostrarModalAtualizar(lesson)} style={{ color: 'var(--violet)' }} title="Atualizar">
									<NotePencil size={30} alt='Silhueta de um caderno com um lápis'/>
								</button>
								<button className="buttonNone linkHover" onClick={() => mostrarModalDeletar(lesson)} style={{ color: 'var(--red)' }} title="Eliminar">
									<Trash size={30} alt='Silhueta de uma lixeira'/>
								</button>

							</div>
						);
					})
				}
			</ListGroup>
			<Modal className="pageOpacity" show={showDetalhes} onHide={() => setShowDetalhes(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>{linhaSelecionada.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalViolet">
					{linhaSelecionada.description}
					<br /><br />
					Aula {linhaSelecionada.typelesson}
					<br /><br />
					Professor(a): {linhaSelecionada.teacher}
				</Modal.Body>
			</Modal>

			<Modal className="pageOpacity" show={showDeletar} onHide={() => setShowDeletar(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>Eliminar {linhaSelecionada.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalViolet">Você realmente deseja excluir esta aula?</Modal.Body>
				<Modal.Footer>
					<button className="buttonNone linkHover" style={{ color: 'var(--red)' }} onClick={() => deletarPorId()} title="Confirmar">
						<Trash size={40} />
					</button>
					<button className="buttonNone linkHover" style={{ color: 'var(--gray-4)' }} onClick={() => setShowDeletar(false)} title="Cancelar">
						<XSquare size={40} />
					</button>
				</Modal.Footer>
			</Modal >

			<Modal className="pageOpacity" show={showAtualizar} onHide={() => setShowAtualizar(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>Atualizar {linhaSelecionada.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body className="modalViolet">
					{linhaSelecionada.description}&nbsp;|&nbsp;
					Aula {linhaSelecionada.typelesson}&nbsp;|&nbsp;
					Professor(a): {linhaSelecionada.teacher}
					<br /><br />
					Descripção antiga
					<InputGroup className="mb-3 pt-3">
						<InputGroup.Text id="basic-addon1">
							{`---> `}{linhaSelecionada.description}
						</InputGroup.Text>
						<Form.Control
							name="description" 
							placeholder="Digite a nova descripção por favor"
							aria-label="nome"
							aria-describedby="basic-addon1"
							onChange={handleChange}
						/>
					</InputGroup>

					Você realmente deseja atualizar a descripção desta aula?

				</Modal.Body>
				<Modal.Footer>
					<button className="buttonNone linkHover" style={{ color: 'var(--red)' }} onClick={() => atualizarPorId()} title="Confirmar">
						<NotePencil size={40} alt='Silhueta de um caderno com um lápis'/>
					</button>
					<button className="buttonNone linkHover" style={{ color: 'var(--gray-4)' }} onClick={() => setShowAtualizar(false)} title="Cancelar">
						<XSquare size={40} alt='Silhueta de um quadrado com uma x'/>
					</button>
				</Modal.Footer>
			</Modal >

		</>
	);
};