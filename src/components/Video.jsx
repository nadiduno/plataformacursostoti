<div style={{ padding: '30px' }}>
      <Button onClick={adicionarLesson}>+ lesson</Button>
      <InputGroup className="mb-3 pt-3">
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

      <Modal show={showAdicionar} onHide={() => setShowAdicionar(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar lesson</Modal.Title>
        </Modal.Header>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Titulo</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  name="title"
                  type="text"
                  placeholder="Titulo"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Campo obrigatório.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="pt-3">
              <Form.Label>Descrição</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Descrição"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Campo obrigatório.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">Criar</Button>
            <Button variant="secondary" onClick={() => setShowAdicionar(false)}>Cancelar</Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <div className="pt-5"></div>
    </div>