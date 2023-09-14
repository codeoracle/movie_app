import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    // Footer
    
    <div className='footer'>
        <div className="footerWrap">
            <div className="socialMedia">
            <FacebookIcon className='icon'/>
            <InstagramIcon className='icon'/>
            <TwitterIcon className='icon'/>
            <YouTubeIcon className='icon'/>
            </div>
            <div className="menu">
              <Link to={'/'} className='link'>
                <span>Conditions of Use</span>
              </Link>
              <Link to={'/'} className='link'>
                <span>Privacy & Policy</span>
              </Link>
              <Link to={'/'} className='link'>
                <span>Press Room</span>
              </Link>
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

export default Footer