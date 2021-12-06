import { useState } from "react";
import { Timeer } from "../Timer";

export const Timerr = () => {

    const[milisegundos, setMilisegundos] = useState(1000)

    return (
        <>
            <span>Milisegundos {milisegundos}</span>

            <br />

            <button onClick = {() => setMilisegundos(1000)} className="btn btn-outline-primary">
                1000
            </button>

            <button onClick = {() => setMilisegundos(2000)} className="btn btn-outline-primary">
                2000
            </button>

            <Timeer milisegundos = {milisegundos} />
        </>
    )
}