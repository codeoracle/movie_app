import './featured.scss'
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Featured = () => {

    const [movies, setMovies] = useState([]);

    // Get top rated movie from tmdb api

    const getMovie = async () =>{
      
    await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`).then(res => {
        setMovies(res.data.results.slice(0, 10));
        console.log(res.data.results);
    }).catch(err => {
        console.log(err);
    })
   
}

useEffect(() => {
  getMovie()
}, [])



  return (
    <div className='featured'>
        <div className="featuredWrap">
            <div className="featuredtitle">
                <h2 className='title'>Featured Movie</h2>
                <div className="seeMore"> <span>See more</span><NavigateNextSharpIcon/> </div>
            </div>
            <div className="movieList">
                {movies.map((movie) =>(
                    <div className="movieCard" data-testid = "movie-card" key={movie.id}>
                        <Link to={'/movie/' + movie.id} className='link'>
                    <div className="cardImgWrap">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} data-testid = 'movie-poster' className='img' alt="" />
                    <FavoriteSharpIcon className='icon'/>
                    </div>
                    <span className="year" data-testid = 'movie-release-date'>USA, {movie.release_date}</span>
                    <h3 className="title" data-testid = 'movie-title'>{movie.title}</h3>
                     <div className="rating">
                <div className="rate">
                    <img src='/img/imdb.png' alt="" />
                    <span>86.0 / 100</span>
                </div>
                <div className="rate">
                    <img src="/img/tomato.png" alt="" />
                    <span>97%</span>
                </div>
            </div>
                    <span className="genre">Action, Adventure, Horror</span>
                        </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Featured