import React, { useState } from 'react'
import { NotePencil, Trash, XSquare } from 'phosphor-react'
import { ListGroup, Modal } from 'react-bootstrap'
import '../styles/Modal.style.css'

export const ListLesson = (props) => {
	const [showDetalhes, setShowDetalhes] = useState(false);
	const [showDeletar, setShowDeletar] = useState(false);
	const [linhaSelecionada, setLinhaSelecionada] = useState({});
	const [lista, setLista] = useState(props.lista);

	const mostrarModalDetalhes = (lesson) => {
		setLinhaSelecionada(lesson);
		setShowDetalhes(true);
	};

	const mostrarModalDeletar = (lesson) => {
		setLinhaSelecionada(lesson);
		setShowDeletar(true);
	};

	const deletarPorId = () => {
		fetch(`http://localhost:9000/api/lessons/${linhaSelecionada.id}`, {
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
								</ListGroup.Item>
								&nbsp;
								<button className="buttonNone linkHover" style={{ color: 'var(--violet)' }} title="Atualizar">
									<NotePencil size={30} />
								</button>
								<button className="buttonNone linkHover" onClick={() => mostrarModalDeletar(lesson)} style={{ color: 'var(--red)' }} title="Eliminar">
									<Trash size={30} />
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
		</>
	);
};
