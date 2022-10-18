import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'bootstrap'

export default function Adduser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [r_id, setr_id] = useState(2)
    const navigate = useNavigate()
    const [user, setuser] = useState()
    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        if (id !== undefined) {
            fetch(`http://localhost:3005/user/${id}`)
                .then((result) => result.json())
                .then((data) => {
                    setName(data.name)
                    setEmail(data.email)
                    setPassword(data.password)
                })

        }
    }, [user])

    // add new user : post method
    const handleAdduser = (e) => {
        e.preventDefault()
        const data = { name, email, password, r_id }
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
                navigate('/crud')
            })
    }

    //for edit in exixsting user detail:  put method
    const hadleEdituser = (e) => {
        e.preventDefault()
        const data = { name, email, password, r_id }
        fetch(`http://localhost:3005/user/${id}`,{
            method:'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;Charset=UTF-8',
            },
        })
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            navigate('/crud')
        })
    }

    return (
        <> 
            <div className="container my-0">
                <h3>{id === undefined ? "Add User" : "Edit User"}</h3>
                <section className="why_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="full">
                                    <form onSubmit={id === undefined ? handleAdduser : hadleEdituser}>
                                        <fieldset>
                                            <input type="text" placeholder="Enter your full name" name="login" required onChange={(e) => setName(e.target.value)} value={name} />
                                            <input type="email" placeholder="Enter your email address" name="email" required value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                    console.log(email)
                                                }
                                                } />
                                            <input type="password" placeholder="Enter your password" name="password" required value={password} onChange={(e) => { setPassword(e.target.value) }
                                            } />
                                            <input type="submit" value={id === undefined ? "Add User" : "Update User"} />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
