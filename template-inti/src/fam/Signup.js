import React, { useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

export default function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [r_id, setr_id] = useState(2)
    const navigate = useNavigate()
    const inputElement = useRef()

    // const
    const handlesubmit = (e) => {
        e.preventDefault()
        const data = { name, email, password, r_id }
        if (data.name.length < 3) {
            inputElement.current.body.style.background="red"
        } else {
            console.log(data);
            fetch('http://localhost:3005/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;Charset=UTF-8',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    navigate('/')
                })
        }
    }
    return (
        <div>


            <section className="why_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="full">
                                <form onSubmit={handlesubmit}>
                                    <fieldset>
                                        <input type="text" placeholder="Enter your full name" name="login" required onChange={(e) => setName(e.target.value) } />
                                        <input type="email" placeholder="Enter your email address" name="email" required
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                console.log(email)
                                            }
                                            } />
                                        <input type="password" placeholder="Enter your password" name="password" required onChange={(e) => { setPassword(e.target.value) }
                                        } />
                                        <input type="submit" defaultValue="Submit" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
