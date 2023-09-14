import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DragHandleOutlinedIcon from '@mui/icons-material/DragHandleOutlined';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [input, setInput] = useState('');
  const navigate = useNavigate()

  const searchHandler = (e) =>{
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    // navbar

    <div className='navbar'>
        <div className="navWrap">

            <div className="LogoWrap">
              <Link className='link' to={'/'}>
                <img src="/img/Logo.png" alt="" className="logo" />
              </Link>
            </div>
            <form onSubmit={searchHandler} className="searchWrap">
              <div className="inputWrap">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className='searchInput' placeholder='What do you want to watch'/>
            <SearchOutlinedIcon className='searchIcon'/>
              </div>
            </form>
            <div className="menuWrap">
            <span className='signIn'>Sign in</span>
            <DragHandleOutlinedIcon className='signinIcon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar