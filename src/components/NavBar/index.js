import styles from "./estilos"
import { Carrito } from "../Carrito"

export const Navbar = ({cantidad, prod, eliminarDelCarrito}) => {
    return (
        <nav style = {styles.nav}>   
            <p>Logo</p>
            <Carrito cantidad = {cantidad} prod = {prod} eliminarDelCarrito = {eliminarDelCarrito} /> 
        </nav>
    )
}