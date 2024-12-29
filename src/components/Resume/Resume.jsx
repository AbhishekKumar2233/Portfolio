import React from 'react'
import { SiCodechef, SiHackerrank, SiGithub, SiLeetcode } from 'react-icons/si';
import { _educationDetails, _experienceDetails, _certificateDetails, _profileDetails } from '../Constant';
import { LiaHackerrank } from "react-icons/lia";
import Preview from './Preview';
const Resume = () => {



    const profileIcon = {
        github: <SiGithub className="zoom-on-hover" />,
        hackerRank: <SiHackerrank className="zoom-on-hover" />,
        leetcode: <SiLeetcode className="zoom-on-hover" />
    }
    return (
        <>
            <div className="col p-4">
                <div className="p-4 bg-dark slide-in-top">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="ff-jose fw-bold ls-2">Abhishek Kumar</h2>
                        </div>
                        <div className="col-6" style={{display:'flex',textAlign:"center",justifyContent:'center'}}>
                            <Preview />
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                            <ul>
                                {
                                    _experienceDetails.map((item, index) => {
                                        const { profile, date, company, location } = item
                                        return <>
                                            <li>
                                                <h4 className="ff-jose my-1 text-red">{profile}</h4>
                                                <h6 className="blue-label px-2 py-1">{date}</h6>
                                                <p className="m-0">{company}</p>
                                                <p> {location}</p>
                                            </li>
                                        </>
                                    })
                                }
                            </ul>
                            <h4 className="ff-jose ls-2">Certificate</h4>
                            <ul>
                                {_certificateDetails.map((item, index) => {
                                    const { certifiucateName, date, company, location } = item
                                    return <>
                                        <li>
                                            <h4 className="ff-jose my-1 text-red">{certifiucateName}</h4>
                                            <h6 className="blue-label px-2 py-1">{date}</h6>
                                            <p className="m-0">{company}</p>
                                            <p> {location}</p>
                                        </li>
                                    </>
                                })
                                }
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">EDUCATION</h4>
                            {_educationDetails.map((item, index) => {
                                const { education, date, location, marks } = item;
                                return <>
                                    <ul>
                                        <li>
                                            <h4 className="ff-jose my-1 text-red">{education}</h4>
                                            <h6 className="blue-label px-2 py-1">{date}</h6>
                                            <p className="m-0">{location}</p>
                                            <p>Grade: {marks}%</p>
                                        </li>
                                    </ul>
                                </>
                            })}
                        </div>
                    </div>
                    <hr></hr>


                    <div className="row">
                        <div className="col-md-6">
                            <h4 className="ff-jose ls-2">PROFILE</h4>
                            <h1>
                                {/* <a href="https://www.codechef.com/users/yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                    <SiCodechef className="zoom-on-hover" />
                                </a>
                                <a href="https://www.hackerrank.com/Yagnik_003" target="/blank" className="text-white text-decoration-none mx-2">
                                    <SiHackerrank className="zoom-on-hover" />
                                </a> */}

                                {_profileDetails.map((item) => {
                                    return <>
                                        <a href={item.url} target="/blank" className="text-white text-decoration-none mx-2">
                                            <item.image />
                                            {profileIcon[item.image]}
                                        </a>
                                    </>
                                })}
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Resume