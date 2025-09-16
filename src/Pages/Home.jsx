import React, { useState } from 'react'
import User from '/src/assets/ashokrd1.jpg'
import logo from '/src/assets/messge.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faMagnifyingGlass, faMicrophone, faPaperclip, faPhone, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import { faLaugh, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import '/src/Pages/Home.css'

const Home = () => {

    const [show, setShow] = useState(false);
    const toggleDropDown = () => {
        setShow(!show)
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100 p-4 App'>
            <div className='shadow p-1  bg-light rounded-2 w-75 d-flex justify-content-between h-100 flex-row home'>
                <div className='shadow p-1 ps-3 bg-light h-100 w-50'>
                    <div className='bg-light d-flex'>
                        <img style={{ width: '25px', height: '25px' }} src={logo} alt='logo' />
                        <p><b>ChatsApp</b></p>
                    </div>
                    <div style={{ width: "85%" }} className='mb-3 d-flex justify-content-center align-items-center p-0 flex-row rounded-5 shadow card'>
                        <button className='btn btn-default'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                        <input style={{ border: 'none', outline: 'none', width: '15rem' }} type='text' placeholder='Search...' name='search' autoComplete='off' />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '85%', width: '90%', overflowY: 'scroll', borderRight: '1px solid black' }} >
                        {
                            Array(20).fill("").map((item, index) => (
                                <div key={index} className='d-flex flex-row bg-light p-1 shadow card-body' style={{ hover: "color-red" }}>
                                    <img className='rounded-circle border-1' style={{ width: 45, height: 45, border: '1px solid #0ef' }} src={User} alt='user1' />
                                    <div style={{ textDecoration: 'none', listStyle: 'none', marginLeft: 10 }}>
                                        <li>YARD</li>
                                        <li>Hello, How are you?</li>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                {/* Chat Section Design */}
                <div className='d-flex w-100 h-100 bg-light justify-content-between flex-column '>

                    <div className='d-flex justify-content-between align-items-top flex-row bg-success'>
                        <div className='w-100 d-flex flex-row'>
                            <img style={{ height: 45, width: 45, borderRadius: '50%', margin: 10, border: '1px solid #0ef' }} src={User} alt='user' />
                            <div style={{ textDecoration: 'none', listStyle: 'none', margin: 10, color: '#fff', fontSize: 15 }}>
                                <li>YARD</li>
                                <li>Last seen today: 01:13 PM</li>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between align-items-center p-1'>
                            <button className='btn btn-default text-light fs-0 '><FontAwesomeIcon icon={faPhone} /></button>
                            <button className='btn btn-default text-light fs-0'><FontAwesomeIcon icon={faVideoCamera} /></button>

                            <div className='dropdown-left '>
                                <button className='btn btn-default text-white' type='button' onClick={toggleDropDown} aria-expanded={show}><FontAwesomeIcon icon={faEllipsisV} /></button>
                                <ul className={`dropdown-menu ${show ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Help & Support</a></li>
                                    <li><a className="dropdown-item" href="#">Give A feedback</a></li>
                                    <li><a className="dropdown-item" href="#">Block</a></li>
                                    <li><a className="dropdown-item" href="#">Clear Chat</a></li> 
                                    <li><a className="dropdown-item dropdown-toggle" href="#">Show more</a></li> 

                                </ul>
                            </div>

                        </div>

                    </div>
                    {/* Chat Body Section Design */}
                    <div className='d-flex justify-content-center align-items-center flex-column w-100 h-100 overflow-y-scroll'>

                        {
                            Array(20).fill("").map((item, index) => (
                                <div key={index} style={{marginBottom:10}} className='d-flex justify-content-between flex-column w-100'>
                                    <div style={{ listStyleType: 'none', marginRight:'25rem' }} className='bg-secondary rounded-bottom-3 rounded-end-3 text-light align-items-center w-auto'>
                                        <li>Yes, I am fine... Hello world from maharishi university of information technology</li>
                                        <li className='text-end me-0 text-info'>10:20 AM</li>
                                    </div>
                                    <div style={{ listStyleType: 'none', maxWidth: 'auto', marginLeft:'25rem'}} className='bg-body-secondary align-items-center rounded-top-3 rounded-start-3 w-auto'>
                                        <li className='text-start'>Hello, How are you? I am currently pursuing BCA from maharishi university of information technology Lucknow</li>
                                        <li className='text-end text-primary'>12:05 PM</li>
                                    </div>
                                </div>
                            ))
                        }

                    </div>


                    {/* Chat Footer Section Design */}
                    <div className='card shadow p-1 mb-1 w-100 d-flex justify-content-evenly flex-row rounded-5  bg-light '>
                        <button className='btn btn-default text-dark'><FontAwesomeIcon icon={faLaugh} /></button>
                        <button className='btn btn-default text-dark'><FontAwesomeIcon icon={faPaperclip} /></button>
                        <input style={{ border: 'none', outline: 'none' }} type='text' placeholder='Type a message...' name='message' autoCapitalize='off' className='border-0 rounded-0 w-100 bg-light ' />
                        <button className='btn btn-default text-dark'><FontAwesomeIcon icon={faPaperPlane} /> </button>
                        <button className='btn btn-default text-dark'><FontAwesomeIcon icon={faMicrophone} /> </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
