import './header.scss'
import Navbar from '../Navbar/Navbar'
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';

const Header = () => {
  return (
    // Header
    
    <div className='header' style={{ backgroundImage: "url(./img/Poster.png)"
}}>
        <Navbar/>
        <div className="headerContainer">
            <div className="headerWrap">
            <h1 className="headerTitle">John Wick 3 : Parabellum</h1>
            <div className="headerRating">
                <div className="rate">
                    <img src="/img/imdb.png" alt="" />
                    <span>86.0 / 100</span>
                </div>
                <div className="rate">
                    <img src="/img/tomato.png" alt="" />
                    <span>97%</span>
                </div>
            </div>
            <span className="headerDesc">John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</span>
            <button className='btn'><PlayCircleFilledSharpIcon/> <span>WATCH TRAILER</span></button>
            </div>
        </div>
        <img src="/img/Pagination.png" className='pagination' alt="" />
    </div>
  )
}

export default Header