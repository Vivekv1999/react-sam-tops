import React, { useEffect, useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import Crud from './Crud'


export default function Header() {
    const navigate = useNavigate()
    // const [detail,setdetail]=useState

    const detail = localStorage.getItem('user')
    const userdetail = JSON.parse(detail)

    const handlelogout = (e) => {
        e.preventDefault()
        console.log('enter logourt');
        //at here getitem admin ni chechk karava jo e to j andar jase if ma =>ahiya bhul thi set item lakhay gyu tu atle notu avatu
        if (localStorage.getItem('admin')) {
            localStorage.removeItem('admin')
            navigate('/')
        }
        else {
            localStorage.removeItem('user')
            navigate('/')
        }
    } 
    return (
        <>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html"><img width={250} src="images/logo.png" alt="#" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <LinkContainer to="/">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                </LinkContainer>

                                <LinkContainer to='/Products'>
                                    <li className="nav-item">
                                        <a className="nav-link" to="/Products">Products</a>
                                    </li>
                                </LinkContainer>

                                {
                                    localStorage.getItem('user') ?

                                        //if admin is loged in then show
                                        <>
                                            <li className="nav-item">
                                                <a className="nav-link" href="blog_list.html" >hello {userdetail.name}</a>
                                            </li>

                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages <span className="caret" /></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="testimonial.html">Testimonial</a></li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" href="blog_list.html" onClick={handlelogout}>Logout</a>
                                            </li>
                                        </>
                                        :
                                        //else show this---->admin na ne aa dekhase + upper baruj rakhu 6 te dekhase

                                        (localStorage.getItem('admin') ?
                                            <>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="blog_list.html" >Admin</a>
                                                </li>

                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/crud" >Crud</Link>
                                                </li>

                                                {/* <Crud /> */}

                                                <li className="nav-item">
                                                    <a className="nav-link" href="blog_list.html" onClick={handlelogout}>Logout</a>
                                                </li>

                                            </>
                                            :
                                            <>
                                                <LinkContainer to='/Login'>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="blog_list.html">Login</a>
                                                    </li>
                                                </LinkContainer>
                                                <LinkContainer to='signup'>

                                                    <li className="nav-item">
                                                        <a className="nav-link" href="contact.html">sign up</a>
                                                    </li>
                                                </LinkContainer>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">
                                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 456.029 456.029" style={{ enableBackground: 'new 0 0 456.029 456.029' }} xmlSpace="preserve">
                                                            <g>
                                                                <g>
                                                                    <path d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                    C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                                <g>
                                                                    <path d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                                                </g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                            <g>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                </li>
                                                <form className="form-inline">
                                                    <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                                        <i className="fa fa-search" aria-hidden="true" />
                                                    </button>
                                                </form>
                                            </>
                                        )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>


        </>
    )
}
