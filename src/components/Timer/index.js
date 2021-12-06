import { useEffect, useRef, useState } from "react"


export const Timeer = ({milisegundos}) => {

    const[segundos, setSegundos] = useState(0)
    const ref = useRef()

    useEffect(() => {
        ref.current && clearInterval( ref.current )

        ref.current = setInterval(() => setSegundos(s => s + 1), 1000)
    }, [milisegundos])

    return (
        <>
            <h4>Tiempo: <small>{ segundos }</small></h4>
        </>
    )
}