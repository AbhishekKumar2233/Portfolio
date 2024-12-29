import React, { Fragment } from 'react'
import { SiJavascript, SiNodedotjs, SiNextdotjs, SiReact, SiHtml5, SiCss3, SiBootstrap, SiAntdesign, SiMongodb, SiExpress, SiPug, SiTailwindcss, SiJquery, SiGithub, SiRedux } from 'react-icons/si'
import { _skillsDetails } from '../Constant'
import Github from './Github'

const Skills = () => {

    const iconsList = {
        "React Js": <SiReact className='fs-4' />,
        "Javascript": <SiJavascript className='fs-4' />,
        "Next Js": <SiNextdotjs className='fs-4' />,
        "Html": <SiHtml5 className='fs-4' />,
        "Css": <SiCss3 className='fs-4' />,
        "Tailwind Css": <SiTailwindcss className='fs-4' />,
        "Bootstrap": <SiBootstrap className='fs-4' />,
        "jQuery": <SiJquery className='fs-4' />,
        "Ant Design": <SiAntdesign className='fs-4' />,
        "Redux": <SiRedux className='fs-4' />,
        "Node.js": <SiNodedotjs className='fs-4' />,
        "Express Js": <SiExpress className='fs-4' />,
        "MongoDB": <SiMongodb className='fs-4' />,
        "Github": <SiGithub className='fs-4' />,
    }
    return (
        <>
            <div className="col py-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div>
                                <h1 className="font-big text-red slide-in-top">Technologies I know</h1>
                                <hr></hr>

                                <div className="row my-2">

                                    {
                                        _skillsDetails.map((item, index) => {
                                            const { label } = item;
                                            return <>
                                                <div key={index} className='mx-2 my-3 border rounded py-1 px-2 mw-fc'>
                                                    <span>{iconsList[label]}<span className='ms-2'>{label}</span></span>
                                                </div>
                                            </>

                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <img className="img-fluid" src="/Images/skills.svg" alt="..."></img>
                        </div>
                    </div>
                    {/* <div className='row'>
                        <Github />
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Skills
