const Error = ({ mensaje }) => {
   return (
      <p
         //
         className='red lighten-4 red-text text-darken-4 error'
      >
         {mensaje}
      </p>
   );
};

export default Error;
