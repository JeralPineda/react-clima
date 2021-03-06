import PropTypes from 'prop-types';

import { ObtenerTiempo } from '../helpers/tiempo';

const Clima = ({ resultado }) => {
   //  Extraer los valores
   const { name, main } = resultado;

   if (!name) return null;

   return (
      <div className='card-panel white col s12'>
         <div className='black-text'>
            <h2>El clima de {name} es: </h2>

            <p className='temperatura'>
               {ObtenerTiempo(main.temp)}
               <span> &#x2103;</span>
            </p>

            <p>
               Temperatura Máxima:
               {ObtenerTiempo(main.temp_max)}
               <span> &#x2103;</span>
            </p>

            <p>
               Temperatura Minima:
               {ObtenerTiempo(main.temp_min)}
               <span> &#x2103;</span>
            </p>
         </div>
      </div>
   );
};

Clima.protoTypes = {
   resultado: PropTypes.object.isRequired,
};

export default Clima;
