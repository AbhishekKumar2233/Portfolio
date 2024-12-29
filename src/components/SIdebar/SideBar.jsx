import React, { Fragment } from 'react'
import { VscHome } from 'react-icons/vsc'
import { FiUser } from 'react-icons/fi'
import { BsCode } from 'react-icons/bs'
import { MdOutlineDashboard, MdOutlinePermContactCalendar } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { Link, NavLink } from "react-router-dom";
import { _sideBarLinks } from '../Constant'

const Sidebar = () => {


    const icons = {
        'Home': <VscHome className='fs-5' />,
        'About': <FiUser className='fs-5' />,
        'Skills': <BsCode className='fs-5' />,
        'Projects': <MdOutlineDashboard className='fs-5' />,
        'Resume': <AiOutlineUnorderedList className='fs-5' />,
        'Contact': <MdOutlinePermContactCalendar className='fs-5' />

    }
    return (
        <>

            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline ff-jost fw-600">
                        {/* <img className='w-25 h-25' style={{mixBlendMode:'color-burn'}} src="/Images/NKJ.jpeg" /> */}
                        Abhishek Kumar</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        {
                            _sideBarLinks.map((item) => {
                                const { label, url } = item
                                return <>
                                    <li className="nav-item">
                                        <NavLink to={url} className="nav-link align-middle px-0 text-white">
                                            {icons[label]} <span className="ms-1 d-none d-sm-inline">{label}</span>
                                        </NavLink>
                                    </li>
                                </>
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar