import { useEffect, useState } from 'react';
import Clima from './Clima';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
   // state del formulario
   const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: '',
   });

   const [consultar, setConsultar] = useState(false);
   const [result, setResult] = useState({});

   const { ciudad, pais } = busqueda;

   useEffect(() => {
      const consultarApi = async () => {
         if (consultar) {
            const appId = process.env.REACT_APP_API_KEY;
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            setResult(resultado);
            setConsultar(false);
         }
      };
      consultarApi();
   }, [consultar, ciudad, pais]);

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

                  <div className='col m6 s12'>
                     <Clima result={result} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
