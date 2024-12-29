import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { _projectsDetails } from '../Constant';

const Projects = () => {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 slide-in-top">

          <div className="row">
            <div className="col-6">
              <h1 className="text-red slide-in-top">Something I've Built</h1>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            {
              _projectsDetails.map((item, index) => {
                const { title, tech, image, imageType ,github,url} = item;
                
                const imageUrl = `./Images/${image}${imageType}`
                return <>
                  <div key={index} className="col-md-4 text-center my-2">
                    <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src={imageUrl} className="d-block w-100" />
                        </div>
                      </div>
                    </div>
                    <h5 className="ff-jose my-1">{title}</h5>
                    <div className="row d-flex justify-content-center">
                      <a href={url} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop /> Watch Live</a>
                      <a href={github} className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub /> Source Code</a>
                    </div>
                  </div>
                </>
              })
            }

          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default Projects