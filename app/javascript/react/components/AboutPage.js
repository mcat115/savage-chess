import React from "react"
import Pic from "../../../assets/images/Senior Pic.jpg"

const AboutPage = (props) => {
  return (
    <div id="about">
      <h1>About the developer!</h1>
      <div className="text-center">
        <a href="https://github.com/mcat115" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/michael-catanese"
          target="_blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
      <img src={Pic} />
      <p>
        Hi! My name is Michael Catanese. Before the Covid pandemic, I was
        attending UMass, in the second semester of my sophomore year as a psych
        major. I love psychology, so when it came to applying for college, this
        seemed like a reason as good as any to pick it as my major, as at 18
        years old I had no idea how I wanted to tackle my future. But right in
        the middle of my college career, UMass shut down for over a year because
        of the virus, and everything changed. I had to take my classes online,
        and found the results to be not in line with what I expected from a
        college education. I had always had a passing interest in coding
        floating in the back of my head, as I love using my brain and solving
        puzzles, and thought it was something I could be pretty good at. But
        after I became serious about wanting to switch, it was too late, as
        UMass only lets you switch into this major, or even add it as a minor,
        if you act very early on in your college career. So with Covid causing
        me to be stuck at home regardless of what I do, I decided to instead
        take the semester off from college and enroll in Launch Academy, a
        full-stack coding boot-camp, and start my new path of learning here!
        This is my final project for the boot-camp, and I'm having so much fun
        learning in this new field! After I return to UMass when the pandemic
        ends, I will start taking CS classes just for credit to continue my
        coding journey!
      </p>
    </div>
  )
}

export default AboutPage
