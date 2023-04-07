
const instrumentos = [
  {
    id: 1,
    nombre: 'Lectura Rock Meters',
    campos: [
      { nombre: 'Lectura Rock Meters', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
    ]
  },
  {
    id: 2,
    nombre: 'Lectura Asentimetro',
    campos: [
      { nombre: 'Lectura Asentimetro Nivel Tierra Vertical', tipo: 'number' },
      { nombre: 'Lectura Asentimetro Nivel Tierra Horizontal', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
      
    ]
  },
  {
    id: 3,
    nombre: 'Lectura Extensometro',
    campos: [
      { nombre: 'Lectura Extensometro Variacion Concreto', tipo: 'number' },
      { nombre: 'Lectura Extensometro Dilatacion Concreto', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
      
    ]
  },
  {
    id: 4,
    nombre: 'Lectura Inclinometro',
    campos: [
      { nombre: 'Lectura Inclinometro Uniaxial', tipo: 'number' },
      { nombre: 'Lectura Inclinometro Biaxial', tipo: 'number' },
      { nombre: 'Lectura Inclinometro Triaxial', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
      
    ]
  },
  {
    id: 5,
    nombre: 'Lectura Pendulo',
    campos: [
      { nombre: 'Lectura Pendulo Promedio Lectura', tipo: 'number' },
      { nombre: 'Lectura Pendulo Lectura Base', tipo: 'number' },
      { nombre: 'Lectura Pendulo Desplazamiento Derecho', tipo: 'number' },
      { nombre: 'Lectura Pendulo Desplazamiento Izquierdo', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
      
    ]
  },
  {
    id: 6,
    nombre: 'Lectura Clinometro',
    campos: [
      { nombre: 'Lectura Clinometro A Lectura Directa', tipo: 'number' },
      { nombre: 'Lectura Clinometro A Lectura Indirecta', tipo: 'number' },
      { nombre: 'Lectura Clinometro A Lectura Promedio', tipo: 'number' },
      { nombre: 'Lectura Clinometro A Lectura Base', tipo: 'number' },
      { nombre: 'Lectura Clinometro A Lectura Giros', tipo: 'number' },
      { nombre: 'Lectura Clinometro B Lectura Directa', tipo: 'number' },
      { nombre: 'Lectura Clinometro B Lectura Indirecta', tipo: 'number' },
      { nombre: 'Lectura Clinometro B Lectura Promedio', tipo: 'number' },
      { nombre: 'Lectura Clinometro B Lectura Base', tipo: 'number' },
      { nombre: 'Lectura Clinometro B Lectura Giros', tipo: 'number' },
      { nombre: 'Fecha', tipo: 'date'}
      
    ]
  }
];

export default function handler(req, res) {
  res.status(200).json(instrumentos);
}