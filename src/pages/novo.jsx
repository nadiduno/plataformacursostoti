const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) { // caso de sucesso
      try {
        await criarLesson(state); // Passar o estado state como parâmetro
        trazerLista();
        setShowAdicionar(false);
      } catch (error) {
        console.log('Erro ao criar aula', error);
      }
      // setLessons(anterior => {
      //   criarLesson();
      // });
      
      // setShowAdicionar(false);
    }
    setValidated(true);
  };

  type="submit" 