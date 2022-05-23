import introImg from '../images/intro.png';
import video from '../images/video.svg';

function Intro() {
  return (
    <section className="intro">
      <div className="intro__container">
        <div className="intro__text">
          <h1 className="title">Take care of yours family’s <span className="title_color_blue">health.</span></h1>
          <p className="title__subtitle">All in one destination for COVID-19 health queries.  Consult 10,000+ health workers about your concerns.</p>
          <button className="button">GET STARTED</button>
        </div>
        <div className='intro__image-container'>
          <img src={introImg} className="intro__image" alt='A doctor and a patient' />
        </div>
      </div>
      <a className="intro__video" href='#' target='_blank'>
        <img className="intro__video-icon" alt="Video icon" src={video} />
        <div className="intro__video-block">
          <p className="intro__video-text">Stay safe with GoCorona</p>
          <p className="intro__video-subtext">Watch Video</p>
        </div>
      </a>
    </section>
  )
}

export default Intro;