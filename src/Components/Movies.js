import React from 'react'
import MoviesData from './MoviesData'

const Movies = () => {
    return (
    <>
            <h1 className="text-center mt-3">Top Gross Movies</h1>

            <div className='container'>
                <div className='row'>
                    {
                     MoviesData.map((cval) => {

                            return (
                                <>
                                <div className='col-md-4 mt-5'>

                                    <div className="card" style={{width:'20rem'}}>
                                        <img src={cval.cover} className="card-img-top"style={{height:"18rem"}} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{cval.MovieName}</h5><span><h6 className="Rating"><i class="fa-solid fa-star" style ={{color:"gold"}}></i>{cval.IMDb}</h6></span>
                                            <p className="card-text" style={{height:"12rem"}}>{cval.Description}</p>
                                            <a href={cval.link} className="btn btn-primary">Watch Now</a>
                                        </div>
                                    </div>
                                   </div>
                                </>
                            )
                        }
                        )
                    }
                </div>
            </div>



</>
 )
}

 export default Movies;