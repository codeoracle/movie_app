import { useEffect, useState } from 'react';
import './searched.scss'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import Loading from '../../components/Loading/Loading'


const Searched = () => {

     const [searchedMovies, setSearchedMovies] = useState([]);
     const [loading, setLoading] = useState(false)
     let params = useParams();

    const getMovies = async () =>{
      setLoading(true)
    await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.API_KEY}`).then(res => {
    setLoading(false)    
    setSearchedMovies(res.data.results.slice(0, 10));
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })
   
}

useEffect(() => {
  getMovies(params.search)
}, [params.search])

  return (
    <div className="searched">
    <div className="LogoWrap">
        <Link to={'/'}>
                <img src="/img/Logo2.png" alt="" className="logo" />
        </Link>
            </div>
            <div className="featuredtitle">
                <h2 className='title'>Search Result</h2>
                <div className="seeMore"> <span>See more</span><NavigateNextSharpIcon/> </div>
            </div>
            {loading ? <Loading/> : 
       <div className="movieList">
                {searchedMovies.map((movie) =>(
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
        }
        <div className="copyRight">
              <Link to={'https://yunus-mustapha.netlify.app/'} target='_blank' className='link'>
                <span>© 2023 MovieBox by 
                   Yunus Mustapha Adedayo
                  </span>
                   </Link>
            </div>
            </div>
  )
}

export default Searched