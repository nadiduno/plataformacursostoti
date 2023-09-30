import { Trash, XSquare } from 'phosphor-react';
import React, { useState } from 'react';
import { ListGroup, Modal, Button } from 'react-bootstrap';

export const ListLesson = (props) => {
	const [showDetalhes, setShowDetalhes] = useState(false);
	const [showDeletar, setShowDeletar] = useState(false);
	const [linhaSelecionada, setLinhaSelecionada] = useState({});
	const [lista, setLista] = useState(props.lista);

	const mostrarModalDetalhes = (produto) => {
		setLinhaSelecionada(produto);
		setShowDetalhes(true);
	};

	const mostrarModalDeletar = (produto) => {
		setLinhaSelecionada(produto);
		setShowDeletar(true);
	};

	const deletarPorId = () => {
		fetch(`https://dummyjson.com/products/${linhaSelecionada.id}`, {
			method: 'DELETE'
		})
			.then(data => data.json())
			.then(resposta => {
				setLista(listaAnterior => {
					return listaAnterior.filter(produto => produto.id !== linhaSelecionada.id);
				});
			})
			.catch(err => console.log('Erro de solicitação', err));
		setShowDeletar(false);
	};

	return (
		<>
			<ListGroup>
				{
					lista.map(produto => {
						return (
							<div style={{ display: 'flex', margin: '5px 0' }}>
								<ListGroup.Item
									key={produto.id}
									action
									onClick={() => mostrarModalDetalhes(produto)}
								>
									{produto.title}
								</ListGroup.Item>
								&nbsp;
								<button className="buttonNone linkHover" onClick={() => mostrarModalDeletar(produto)} style={{ color: 'var(--red)' }} title="Eliminar">
									<Trash size={40} />
								</button>

							</div>
						);
					})
				}
			</ListGroup>
			<Modal show={showDetalhes} onHide={() => setShowDetalhes(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>{linhaSelecionada.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{linhaSelecionada.description}</Modal.Body>
			</Modal>

			<Modal show={showDeletar} onHide={() => setShowDeletar(false)} aria-labelledby="contained-modal-title-vcenter" centered>
				<Modal.Header closeButton>
					<Modal.Title>Eliminar {linhaSelecionada.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body>Você realmente deseja excluir esta aula? </Modal.Body>
				<Modal.Footer>
					<button className="buttonNone linkHover" style={{ color: 'var(--red)' }} onClick={() => deletarPorId()} title="Confirmar">
						<Trash size={50} />
					</button>
					<button className="buttonNone linkHover" style={{ color: 'var(--gray-1)' }} onClick={() => setShowDeletar(false)} title="Cancelar">
						<XSquare size={50} />
					</button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
