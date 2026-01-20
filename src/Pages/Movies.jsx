import { use, useEffect, useState } from "react";
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
            <h1 className="text-center">Pagina Film</h1>
            <div className="container">
                <div className="row">
                   <Card  movieArray={movieArray}/>
                </div>
            </div>
        </>
    )

}