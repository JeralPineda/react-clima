import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
   // state del formulario
   const [busqueda, setBusqueda] = useState({
      ciudad: '',
      pais: '',
   });

   const [consultar, setConsultar] = useState(false);

   const { ciudad, pais } = busqueda;

   useEffect(() => {
      const consultarApi = async () => {};
      consultarApi();
   }, [consultar]);

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

                  <div className='col m6 s12'>1</div>
               </div>
            </div>
         </div>
      </>
   );
}

export default App;
