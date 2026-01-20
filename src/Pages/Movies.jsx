import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function Movies() {

    const [movieArray, setMovieArray] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then((resp) => {
            console.log(resp.data.result);

            setMovieArray(resp.data.result);
            
        }).catch((err) => {
            if (err) {
                console.log(err);

            }
        })

    }, [])
    


    return (
        <>
            <h1 className="text-center mb-5">Pagina Film</h1>
            <div className="container">
                <div className="row justify-content-center">
                   <Card  movieArray={movieArray}/>
                </div>
            </div>
        </>
    )

}