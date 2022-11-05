import { omit } from 'lodash'
import React, { useRef, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'


export default function Signup() {
    // const [name, setName] = useState()
    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const [r_id, setr_id] = useState(2)
    const navigate = useNavigate()
    const inputElement = useRef()
    const refpass = useRef()

    const [error, seterror] = useState({})
    const [values, setvalues] = useState({})


    // const

    const validate = (name, val) => {
        switch (name) {
            case "name":
                if (val.length < 5) {
                    seterror({
                        ...error, name: "oser name is at least 5 letters"
                    })
                    console.log('function in switch --if');

                } else {
                    let newobj = omit(error, "name")
                    seterror(newobj)
                    console.log('function in switch --else');
                }
                break;
            // case "email":
            //     console.log('valid email');
            //     break;
        }
    }


    const handlechange = (e) => {
        let name = e.target.name
        let val = e.target.value
        validate(name, val)
        setvalues({
            ...values, [name]: val
        })
        // validate(name, value) /////=======self
        //setvalue aarite nay chale kem ke 
        // valiadte(name,value) be perameter ley 6 ane aa peramer ma value se sudi atle aa rit nay hale 
        // setvalues({
        //     ...values, [e.target.name]: (e.target.value)
        // })

    }

    const handlesubmit = (e) => {
        e.preventDefault()

        ///////-============self added validation for only password ------using ref=========***&&&**********======
        // const data = { name, email, password, r_id }
        // if (data.password.length < 5) {
        //     refpass.current.style.color = "red"
        //     refpass.current.style.backgroundColor = "yellow"
        //     refpass.current.value = "password length is min 5 charcter"  //aa ahita dekhase parntu ... ma kem ke input type password 6 atle
        // inputElement.current.body.style.background = "red"
        // } else {
        // console.log(data);
        if (Object.keys(error).length === 0 && Object.keys(values).length !== 0) {

            fetch('http://localhost:3005/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;Charset=UTF-8',
                },
                body: JSON.stringify(values),   //ahita data lkahutu pela 
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                    navigate('/')
                })
        }else{
            alert("thereis an error")
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
                                    <input type="text" placeholder="Enter your full name" name="name" required onChange={handlechange} />
                                    {/* onchange ma pahela validation aphela --->{(e) => setName(e.target.value)} */}
                                    {
                                        error.name && <h4 style={{ color: 'red' }}>{error.name}</h4>
                                    }
                                    <input type="email" placeholder="Enter your email address" name="email" required
                                        onChange={handlechange} />
                                    <input type="password" ref={refpass} placeholder="Enter your password" name="password" required onChange={handlechange} />
                                    <span ></span>
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
