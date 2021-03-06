import { useState } from "react";
import { Burbuja } from '../Burbuja'
import styles from './estilos'

export const Carrito = ({cantidad, prod, eliminarDelCarrito}) => {
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    let subTotal = prod.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let imp = subTotal * 0.15
    let totalPagar = subTotal + imp

    

    return (
        <div style = {styles.carroContenedor}>
        { cantidad > 0 && <Burbuja cantidad = {cantidad} />}
            <button onClick = {handleMostrarCarro} style = {styles.carrito}>
                Carrito
                {/* <i class="bi bi-cart4"></i> */}
            </button>
            {
                (cantidad > 0 && mostrarCarro) 
                ? 
                    <div style = {styles.listaArticulos}>
                        <ul style = {styles.ul}>
                        {
                            prod.map(x => {
                                return (
                                    <li style = {styles.li}>
                                        <img height = {25} alt = {x.nombre} src = {x.imagen} />
                                        <span> <button onClick = {eliminarDelCarrito} style = {styles.deleteButtom}>X</button> - {x.nombre}</span>
                                        <span>
                                            ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                        </span>
                                    </li>
                                )
                            })
                        }
                        <li style = {styles.li}>
                            <strong>Sub total</strong>
                            <strong>{subTotal.toLocaleString()}</strong>
                        </li>
                        <li style = {styles.li}>
                            <strong>Impuesto</strong>
                            <strong>{imp.toLocaleString()}</strong>
                        </li>
                        <li style = {styles.li}>
                            <strong>Total a pagar</strong>
                            <strong>{totalPagar.toLocaleString()}</strong>
                        </li>
                        </ul>
                    </div>
                :
                    null
            }
        </div>

    )
}