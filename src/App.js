import { useEffect, useState } from 'react';
import Clima from './components/Clima';
import Error from './components/Error';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
   // state del formulario
   const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: '',
   });

   const [consultar, setConsultar] = useState(false);
   const [resultado, setResultado] = useState({});
   const [error, setError] = useState(false);

   const { ciudad, pais } = busqueda;

   useEffect(() => {
      const consultarApi = async () => {
         if (consultar) {
            const appId = process.env.REACT_APP_API_KEY;
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            setResultado(resultado);
            setConsultar(false);

            // Detecta si hubo resultados correctos en la consulta
            if (resultado.cod === '404') {
               setError(true);
            } else {
               setError(false);
            }
         }
      };
      consultarApi();
   }, [consultar, ciudad, pais]);

   let componente;
   if (error) {
      componente = <Error mensaje='Ciudad no encontrada' />;
   } else {
      componente = <Clima resultado={resultado} />;
   }

   return (
      <>
         <Header titulo='Clima React App' />

         <div className='contenedor-form'>
            <div className='container'>
               <div className='row'>
                  <div className='col m6 s12'>
                     <Formulario
                        //
                        busqueda={busqueda}
                        setBusqueda={setBusqueda}
                        setConsultar={setConsultar}
                     />
                  </div>

                  <div className='col m6 s12'>{componente}</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
