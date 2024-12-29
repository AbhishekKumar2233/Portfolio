import React from 'react'

const About = () => {
  return (
    <div className="col py-3 d-flex align-items-center about-image">

      <div className="container">
        <div className="row">
          <h1 className="font-big text-red slide-in-top">About me</h1>
          <hr></hr>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <div>

              <p style={{ textAlign: "justify" }} className='slide-in-bottom'>
                Hi, I'm <span className="purple">Abhishek Kumar</span> from <span className="purple">Kanpur, Uttar Pradesh, India.</span>
                <br />
                I'm currently serving as a React.js developer at Ideahelix Inc.

                <p className='slide-in-bottom'>
                  I am a passionate Front-End Developer, a self-directed learner, and a collaborative team player with 1.6 years of experience in web development.
                </p>

                <p className='slide-in-bottom'>
                  Seeking new opportunities in the industry, I am eager to contribute to challenging and diverse projects using the latest technologies.
                </p>

                <p className='slide-in-bottom'>
                  Technologies I've worked on include: <span className="text-red ls-2">React.js, JavaScript, Next.js, HTML, CSS, Bootstrap, Tailwind CSS, Ant Design, jQuery</span>.
                <br />  Additionally, my skills extend to: <span className="text-red ls-2">Node.js, Express.js, MongoDB</span>.
                </p>

                <p className='slide-in-bottom'>
                  Currently, I am expanding my knowledge by learning <span className="text-red ls-2">ASP.Net Core</span>.
                </p>
              </p>

            </div>
          </div>
          <br />
          <div className="col-lg-6 col-md-12 col-sm-12 mt-4">
            {/* <img className="img-fluid" src="/Images/img.jpg" style={{ borderRadius: "4px" }} alt="..."></img> */}
          </div>

        </div>
        
      </div>


    </div>
  )
}

export default About