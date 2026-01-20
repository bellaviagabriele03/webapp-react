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
            <h1 className="text-center">Pagina Dettagli film: {show.title}</h1>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-2">
                        <div className="card w-100 h-100">
                            <div className="card-body">
                                <img className="card-img-top" src={urlImg + show.image} alt="" />
                                {reviews.map((rev)=>{
                                    return (
                                        <>
                                            <p className="card-text"><span className="text-success">user:</span> {rev.name} <span className="text-warning">Vote:</span> {rev.vote}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}
