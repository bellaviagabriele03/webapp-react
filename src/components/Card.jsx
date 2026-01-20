import { NavLink, Link} from "react-router-dom";
import Details from "../Pages/Details";

export default function Card({ movieArray }) {


    const urlImg = "http://localhost:3000/img/";

    return (
        <>
           
            {movieArray.map((movie) => {
                return (
                    <>
                        <div className="col-2" key={movie.id}>
                            <div className="card text-center w-100 h-100">
                                <img className="card-img-top" src={urlImg + movie.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                </div>
                                <Link to={`/movies/${movie.id}`}>MORE INFO</Link>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}