export default function Card({ movieArray }) {


    const urlImg = "http://localhost:3000/img/";

    return (
        <>
            {movieArray.map((movie, index) => {
                return (
                    <>
                        <div className="col-2">
                            <div className="card" key={movie.id}>
                                <img className="card-img-top" src={urlImg + movie.image} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.abstract}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}