import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function AddCategory() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }
  function handleChange(infos) {
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value,
    );
  }
  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (resp) => {
        const response = await resp.json();
        setCategories([
          ...response,
        ]);
      });
    // setTimeout(() => {
    //   setCategories([
    //     ...categories,
    //     {
    //       id: 1,
    //       name: 'Ação',
    //       description: 'Filmes e séries com o mais alto grau de ação',
    //       cor: '#cBD1FF',
    //     },
    //     {
    //       id: 2,
    //       name: 'Front End',
    //       description: 'Categoria Show',
    //       cor: '#cBD1FF',
    //     },

    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>
      <form
        onSubmit={function handleSubmit(infoEvent) {
          infoEvent.preventDefault();
          setCategories([...categories, values]);
          setValues(initialValues);
        }}
      >
        <FormField
          label="Categoria"
          value={values.name}
          onChange={handleChange}
          type="text"
          name="name"

        />

        <FormField
          label="Descrição"
          value={values.description}
          onChange={handleChange}
          type="textarea"
          name="description"

        />

        <FormField
          label="Cor"
          value={values.color}
          onChange={handleChange}
          type="color"
          name="color"

        />

        <Button>Cadastrar</Button>
      </form>
      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}
      <ul>
        {categories.map((category, indice) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${category.name}${indice}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default AddCategory;
