import { Fragment, useState } from 'react'
import { Articulos } from "./components/Articulos";
import { Navbar } from "./components/NavBar";
import { Timerr } from './components/Timers';
// base de datos
const informacion = {
  articulos: [
    {id: 1,nombre: 'homepod', precio: 99, imagen: '/images/homepod.jpg'},
    {id: 2,nombre: 'imac', precio: 1200, imagen: '/images/imac.jpg'},
    {id: 3,nombre: 'ipad', precio: 400, imagen: '/images/ipad-mini.jpg'},
    {id: 4,nombre: 'iphone13', precio: 1100, imagen: '/images/iphone13.jpg'},
    {id: 5,nombre: 'mac', precio: 1600, imagen: '/images/mac.jpg'}
  ],
  carrito: [

  ]
}



function App() {
  const [data, setData] = useState(informacion)

  console.log(data);
  
  const agregarAlCarro = (prod) => {

    if(data.carrito.find(x => x.id === prod.id)){
      const carritoCopia = data.carrito.map(x => x.id === prod.id ? ({...x, cantidad: x.cantidad +1}) : x)
      data.carrito = carritoCopia
      setData({...data})
      return
    }

    data.carrito.push({...prod, cantidad: 1})
    setData({...data})
  }

  const eliminarDelCarrito = (prod) => {
    data.carrito.splice(prod.id, 1)
    setData({...data})
    window.confirm('Seguro') ? alert('producto borrado') : alert('Proceso cancelado')
  }


  let cantidad = data.carrito.reduce((acum, actual) => acum + actual.cantidad, 0)

  return (
    <Fragment>
      <Navbar cantidad = {cantidad} prod = {data.carrito} eliminarDelCarrito = {eliminarDelCarrito} />
      <Articulos agregarAlCarro = {agregarAlCarro} data = {data} />
      <h2>useEffect - useRef</h2>
      <hr />

      <Timerr />
    </Fragment>
  );
}

export default App;
