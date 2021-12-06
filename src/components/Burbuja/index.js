import styles from "./estilos"

export const Burbuja = ({cantidad}) => {
    return (
        <span style = {styles.burbujaNumero}>
                {cantidad > 9 ? '9+' : cantidad}
        </span>
    )
}