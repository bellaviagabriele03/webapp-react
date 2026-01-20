import axios from "axios";
import { useEffect, useState } from "react";
export default function Details({ movieArray }) {


    const [show, setShow] = useState([]);

    useEffect(() => {
        console.log("faccio nuova chiamata");

    }, [])


    return (
        <>
            <h1>Dettagli film: {movieArray.title}</h1>
        </>
    )
}