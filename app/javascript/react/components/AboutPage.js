import React from "react"
import Pic from "../../../assets/images/pic_of_me.jpg"

const AboutPage = (props) => {
  return (
    <div id="about">
      <h1>About the developer!</h1>
      <div className="text-center">
        <a href="https://github.com/mcat115" target="_blank">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/michael-catanese" target="_blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <img src={Pic} />
      <p>
        Hello! My name is Michael Catanese. Since it was too late to switch to a
        computer science major once I decided what I wanted to do with my
        career, and since education had been moved online due to the Covid
        pandemic, I took a semester off from college to enroll in a coding
        bootcamp. After I returned to college to finish my degree, I took every
        CS class I was able to get a seat in, and worked multiple software
        engineering internships between my semesters.
      </p>
      <p>
        My goal now is to continue to grow my skills and career. I am very
        organized and communicative, but also very creative and flexible,
        qualities I believe work together beautifully in this field. And I would
        love any opportunity to prove it!
      </p>
    </div>
  )
}

export default AboutPage
