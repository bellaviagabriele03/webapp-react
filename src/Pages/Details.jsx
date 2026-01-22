import axios from "axios";
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";

export default function Details() {

    const { id } = useParams();
    const [show, setShow] = useState([]);
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
            console.log(resp.data.result);
            console.log(resp.data.reviews);

            setShow(resp.data.result)
            setReviews(resp.data.reviews)
        })

    }, [])


    const urlImg = "http://localhost:3000/img/";

    return (
        <>
            <h1 className="text-center bg-black mb-0 text-white">{show.title}</h1>

            <div className="container">
                <div className="row">
                    <div className="col-4 p-3 bg-black">
                        <img className="w-100 h-100" src={urlImg + show.image} alt="" />
                    </div>
                    <div className="col-8 text-center bg-black text-white d-flex justify-content-center align-items-center flex-column">
                        <h3>Autore: {show.director}</h3>
                        <p>{show.abstract}</p>
                        <p>Genere: {show.genre}</p>
                        <span>Uscito nel {show.release_year}</span>
                    </div>
                </div>
            </div>
            <h1 className="text-center bg-black py-4"></h1>

            
        </>
    )

}
