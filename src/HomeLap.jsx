import './HomeLap.css'

function HomeLap(){

  const reasons = [
    {
      id:1,
      title:"Battery 🔋",
      text:"Battery degradation over time reduces the available driving range and overall performance."
    },
    {
      id:2,
      title:"Weather ☁️🌡️",
      text:"Hot and cold temperatures affect battery efficiency, reducing the distance an EV can travel."
    },
    {
      id:3,
      title:"Terrain ⛰️  ",
      text:"Hills, rough roads, and traffic increase energy consumption during a trip."
    },
    {
      id:4,
      title:"Charging Network ⚡",
      text:"Knowing nearby charging stations helps plan longer journeys with confidence."
    },
    {
      id:5,
      title:"Driving Style 🚗",
      text:"Frequent acceleration and high speeds consume more battery power than smooth driving."
    },
    {
      id:6,
      title:"Vehicle Load 👪",
      text:"Extra passengers and luggage increase vehicle weight, reducing driving range."
    }
  ]

  const questions = [
    '1) How is the driving range calculated ?',
    "2) Why is the estimated range different from the manufacturer's claim ?",
    "3) Does weather affect EV range ?",
    "4) What factors have the biggest impact on EV range ?"
  ]

  const mquestions = questions.map((question)=>(
    <p className="question-faq" >{question}</p>
  ))

  const mreasons = reasons.map((reason)=>({
    id:reason.id,
    title:reason.title,
    text:reason.text
  }))

  return(
    <>
      <div className="header">
        <div className="logo-heading">
          <img src="/logo-car.png" alt="" className="logo-header" />
          <p className="heading">EV TRIP ANALYZER</p>
        </div>
        <div className="nav-links">
          <p className="home-link">Home</p>
          <p className="start-link">Start</p>
          <button className='analyze-btn' >Analyze</button>
        </div>
        

      </div>

      <div className="hero-sec">
        <div className="hero-text">
          <p className="text-heading">Powering Smarter <br /> EV Decisions</p>
          <p className="text-below">Analyze electric vehicles by battery capacity, driving range, charging performance, and efficiency through an intuitive, data-driven dashboard.</p>
          
        </div>
        <img src="/logo-hero.jpg" alt="" className="logo-hero" />
      </div>
      <p className="why-q">Why Accurate EV Range Estimation Matters ?</p>
      <img src="/arrow-down.png" alt="" className="arrow-down" />
      <div className="plan-smarter">
        <p className="plan-text">Plan smarter journeys with confidence by understanding the factors that influence your vehicle's real-world range.</p>
      </div>
      <div className="details-container">
        {mreasons.map((reason)=>(
        <div className="details-box" key={reason.id}>
        <p className="title">{reason.title}</p>
        <p className="text">{reason.text}</p>
      </div>
      ))}
      </div>

      <p className="faq">Frequently Asked Questions</p>
      {mquestions}

      <p className="for">For answers</p>

      <button className="contact">Contact Us</button>

      <div className="footer">
        <img src="/logo-car.png" alt="" className="logo-footer" />
        <p className="rights">All Rights Reserved By Owner</p>
        <img src="/linkedin-original.svg" alt="" className="linkedln" />
        <img src="/github.svg" alt="" className="github" />
      </div>
    </>
  )
}

export default HomeLap