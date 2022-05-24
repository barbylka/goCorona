import google from '../images/googlePlay.png';
import appleStore from '../images/appStore.png';

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__links">
        <a className="footer__link" href="#" target="_blank"><img className="footer__link-thumb" src={google} alt="Link to GooglePlay" /></a>
        <a className="footer__link" href="#" target="_blank"><img className="footer__link-thumb" src={appleStore} alt="Link to AppStore" /></a>
      </div>
    </footer>
  )
}

export default Footer;