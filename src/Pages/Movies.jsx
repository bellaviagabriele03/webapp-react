import { use, useEffect, useState } from "react";
import axios from "axios";

export default function Movies() {

    const [movieArray, setMovieArray] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then((resp) => { 
            console.log(resp);
            
        }).catch((err)=>{
            if(err) {
                console.log(err);
                
            }
        })

    }, [])



    return (
        <>
            <h1>Pagina Film</h1>
        </>
    )
}