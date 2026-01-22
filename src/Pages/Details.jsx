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

    }, [id])






    const urlImg = "http://localhost:3000/img/";

    const initialForm = {
        name: "",
        vote: 1,
        text: ""
    }

    const [formData, setFormData] = useState(initialForm);


    function updateForm(event) {
        const value = event.target.value;
        const key = event.target.name;
        setFormData({
            ...formData,
            [key]: value
        });

    }


    function postCallto(event) {
        event.preventDefault();

        axios.post(`http://localhost:3000/api/movies/${id}/reviews`, formData).then((resp) => {
            console.log(resp);
            setFormData(initialForm)
            axios.get(`http://localhost:3000/api/movies/${id}`).then((resp) => {
                console.log(resp.data.result);
                console.log(resp.data.reviews);

                setShow(resp.data.result)
                setReviews(resp.data.reviews)
            })
        })
    }


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

            <section className="container mt-4">
                <h2>Recensioni:</h2>
                <div className="row">
                    <div className="col-6">
                        {reviews.map((review) => {
                            return (
                                <>
                                    <div className="card mb-3">
                                        <div className="card-header bg-secondary"><h3>{review.name}</h3></div>
                                        <div className="card-body">
                                            <p className="card-text">{review.text}</p>
                                            <span>Voto: {review.vote}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="col-6 bg-secondary text-black p-3">
                        <div>
                            <form onSubmit={postCallto}>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name"><strong>NOME</strong></label>
                                    <input className="form-control" type="text" id="name" placeholder="(es: Mario)" name="name" onChange={updateForm} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="vote"><strong>VOTO</strong></label>
                                    <input className="form-control" type="number" id="vote" placeholder="5" name="vote" onChange={updateForm} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="text"><strong>TEXT</strong></label>
                                    <textarea className="form-control" name="text" id="text" placeholder="bellissiiimooo" onChange={updateForm}></textarea>
                                </div>
                                <button className="btn btn-success">INVIA</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}
