import React, { useState } from 'react'

export default function Signup() {


    
    return (
        <div>


            <section className="why_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="full">
                                <form >
                                    <fieldset>
                                        <input type="text" placeholder="Enter your full name" name="login" required />
                                        <input type="email" placeholder="Enter your email address" name="email" required
                                             />
                                        <textarea placeholder="Enter your message" required defaultValue={""}
                                           />
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

