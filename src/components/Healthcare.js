import symptom from '../images/symptom.svg';

function Healthcare() {
  return (
    <section className="healthcare">
      <h1 className="title"><span className="title_color_red">Healthcare</span> at your Fingertips.</h1>
      <p className="title__subtitle">Bringing premium healthcare features to your fingertips. User friendly mobile platform to bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
      <div className="healthcare__cards">
        <div className="card">
          <img className="card__image" alt="Symptom" src={symptom} />
          <h3 className="card__title">Symptom Checker</h3>
          <p className="card__text">Check if you are infected by COVID-19 with our Symptom Checker</p>
        </div>
      </div>
    </section>
  )
}

export default Healthcare;