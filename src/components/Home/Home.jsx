import React from 'react'
import TypeWritter from './TypeWritter'

const Home = () => {
  return (
    <>
      <div className="col py-3 d-flex align-items-center">

        <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
              <div>
                <h2 className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h2>
                <h1 className="m-0 font-big animate-charcter heading">I'm Abhishek,</h1>
                <TypeWritter />

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img className="img-fluid " src="/Images/Home_image.svg" alt="Cp"></img>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Home