function Experts() {
  return (
    <section className="experts">
      <div className="experts__boxes">
        <div className="experts__statistics">
          <p className="experts__statistics-data"><span className="experts__statistics-span">2m</span>Users</p>
          <p className="experts__statistics-data"><span className="experts__statistics-span">78</span>Countries</p>
          <p className="experts__statistics-data"><span className="experts__statistics-span">10,000+</span>Medical experts</p>
        </div>
      </div>
      <div className="experts__container">
        <div className="experts__text">
          <h1 className="title">Talk to <span className="title_color_blue">experts.</span></h1>
          <p className="title__subtitle">Book appointments or submit queries into thousands of forums concerning health issues and prevention against noval Corona Virus.</p>
          <button className="button">Features</button>
        </div>
        <div className="experts__video-container">
          <iframe className="experts__video" src="https://www.youtube.com/embed/B5smctuV7-Q" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  )
}

export default Experts;