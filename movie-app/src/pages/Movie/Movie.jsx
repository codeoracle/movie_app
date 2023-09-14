import './movie.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import BookOnlineOutlinedIcon from '@mui/icons-material/BookOnlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';


function Movies() {

        let params = useParams();
      const [details, setDetails] = useState({});

    // Get single movie from tmdb api

    const movieDetails = async () =>{
      
    await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=04cb035953f17efb0b2719fc8ac25ddf`).then(res => {
        setDetails(res.data);
        console.log(res.data);
    }).catch(err => {
        console.log(err);
    })
   
}

useEffect(() => {
  movieDetails();
}, [params.id]);


  return (

      <div className='movies'>
        <div className="sideBar">
            <Link to={'/'}>
            <img src="/img/Logo2.png" className='logo' alt="Logo2" />
            </Link>
            <div className="menu">
            <div className="menuItem">
                <HomeOutlinedIcon className='icon'/>
                <span className="menuTitle">Home</span>
            </div>
            <div className="menuItemActive">
                <VideoCameraBackOutlinedIcon className='icon'/>
                <span className="menuTitleActive">Movies</span>
            </div>
            <div className="menuItem">
                <OndemandVideoOutlinedIcon className='icon'/>
                <span className="menuTitle">TV Series</span>
            </div>
            <div className="menuItem">
                <CalendarMonthOutlinedIcon className='icon'/>
                <span className="menuTitle">Upcoming</span>
            </div>
            </div>
            <div className="quize">
                <span className="title">Play movie quizes and earn free tickets</span>
                <span className="desc">50k people are playing now</span>
                <button className="btn">Start playing</button>
            </div>
            <div className="logout">
            <LogoutIcon className='icon'/>
            <span className='logoutTitle'>Logout</span>
            </div>
        </div>
        <div className="movieDetails">
            <div className="movieTrailer">
                <img src="/img/trailer.png" alt="trailer" className='trailer'/>
            </div>
            <div className="movieFeatured">
                <div className="featuredList">
                    <div className="featuredItems">
                        <span className="Items" data-testid = 'movie-title' >{details.title}</span>•
                        <span className="Items" data-testid = 'movie-release-date'>{details.release_date}</span>•
                        <span className="Items"> PG-13</span>•
                        <span className="Items" data-testid = 'movie-runtime'>{details.popularity}m</span>
                    </div>
                    <div className="featuredGenre">
                        <span className="genraList">Action</span>
                        <span className="genraList">Drama</span>
                    </div>
                </div>
                <div className="rating">
                <StarPurple500OutlinedIcon className='icon'/>
                <span className="ratingCount">8.5</span>
                <span className="ratingScore">| 350k</span>
                </div>
            </div>
            <div className="movieDesc">
                <div className="movieDescription">
                    <p className="desc" data-testid = 'movie-overview'>{details.overview}</p>
                    <div className="movieCrew">
                    <div className="crew">
                        <span className="post">Director :</span>
                        <span className="name">Joseph Kosinski</span>
                    </div>
                    <div className="crew">
                        <span className="post">Writers :</span>
                        <span className="name">Jim Cash, Jack Epps Jr,  Peter Craig</span>
                    </div>
                    <div className="crew">
                        <span className="post">Stars :</span>
                        <span className="name">Tom Cruise, Jennifer Connelly, Miles Teller </span>
                    </div>
                    </div>
                    <div className="rated">
                        <span className="rates">Top rated movie #65</span>
                        <div className="awardWrap">
                        <span className="awards">Awards 9 nominations</span>
                        <KeyboardArrowDownOutlinedIcon className='icon'/>
                        </div>
                    </div>
                </div>
                <div className="relatedMovie">
                    <div className="buttons">
                        <button className="showTime">
                        <BookOnlineOutlinedIcon className='icon'/>
                        <span className='seeShow'>See Showtimes</span>
                        </button>
                        <button className="moreWatch">
                        <FormatListBulletedOutlinedIcon className='icon'/>
                        <span className='seeShow'>More watch options</span>
                        </button>
                    </div>
                    <div className="relatedMovie">
                            <img src="/img/moremovie.png" className='img' alt="moremovie" />
                            <div className="bestShows">
                            <FormatListBulletedOutlinedIcon className='icon'/>
                            <span className='bestMovie'>The Best Movies and Shows in September</span>
                    </div> 
                    </div>
                </div>
            </div>
            <div className="copyRight">
              <Link to={'https://yunus-mustapha.netlify.app/'} target='_blank' className='link'>
                <span>© 2023 MovieBox by 
                   Yunus Mustapha Adedayo
                  </span>
                   </Link>
            </div>
        </div>
    </div>
  )
}

export default Movies