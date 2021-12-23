import { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
   const [error, setError] = useState(false);

   const { ciudad, pais } = busqueda;

   // Funcion que coloca los elementos en el state
   const handleChange = (e) => {
      // Actualizar el state
      setBusqueda({
         ...busqueda,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Validar
      if (ciudad.trim() === '' || pais.trim() === '') {
         setError(true);
         return;
      }

      setError(false);

      // Pasarlo al componente principal
      setConsultar(true);
   };

   return (
      <form onSubmit={handleSubmit}>
         {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}

         <div
            //
            className='input-field col s12'
            value={ciudad}
         >
            <input
               //
               type='text'
               name='ciudad'
               id='ciudad'
               onChange={handleChange}
            />
            <label htmlFor='ciudad'>Ciudad: </label>
         </div>

         <div className='input-field col s12'>
            <select
               //
               name='pais'
               id='pais'
               defaultValue={pais}
               onChange={handleChange}
            >
               <option value=''>-- Seleccione un país --</option>
               <option value='US'>Estados Unidos</option>
               <option value='MX'>México</option>
               <option value='AR'>Argentina</option>
               <option value='CO'>Colombia</option>
               <option value='CR'>Costa Rica</option>
               <option value='ES'>España</option>
               <option value='PE'>Perú</option>
               <option value='HN'>Honduras</option>
            </select>
            <label htmlFor='pais'>País: </label>
         </div>

         <div className='input-field col s12'>
            <button
               //
               type='submit'
               className='waves-effect waves-light btn-large btn-block green accent-4 col s12'
            >
               Buscar Clima
            </button>
         </div>
      </form>
   );
};

Formulario.propTypes = {
   busqueda: PropTypes.object.isRequired,
   setBusqueda: PropTypes.func.isRequired,
   setConsultar: PropTypes.func.isRequired,
};

export default Formulario;
