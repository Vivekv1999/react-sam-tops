import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()

    const loginhandle = (e) => {
        e.preventDefault()
        fetch("http://localhost:3005/user ")
            .then((response) => response.json())
            .then((result) => {
                result.filter((item) => {
                    if (item.email === email) {
                        if (item.password === password) {
                            if (item.r_id === 1) {
                                localStorage.setItem('admin', JSON.stringify(item))
                                console.log('loged in succesfully');
                                navigate('/')
                            }
                            else {
                                localStorage.setItem('user',JSON.stringify(item))
                                navigate('/')
                                console.log('user logedin');
                            }
                        }
                        else{
                            console.log('wrong password');
                            return
                        }
                    }
                    console.log('wrong email id enter correct email id');
                })
            })
    }

    return (
        <>

            <section className="why_section layout_padding">''
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="full">
                                <form onSubmit={loginhandle}>
                                    <fieldset>
                                        <input type="email" onChange={(e) => setemail(e.target.value)} placeholder="Enter your email address" name="email" required />
                                        <input type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Enter your password" name="password" required />
                                        {/* <button className='btn btn-primary '>Login</button> */}
                                        <input type="submit" value="Login" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}
