export function ObtenerTiempo(tiempo) {
   // Grados kelvin
   const kelvin = 273.15;

   return parseFloat(tiempo - kelvin, 10).toFixed(2);
}
