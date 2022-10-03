import React, { useState } from "react";



export default function Basicvalidationformv19() {
  const [user, setuser] = useState("")
  const [password, setpassword] = useState("")
  const [usererr, setusererr] = useState(false)
  const [passerr, setpasserr] = useState(false)

  function loginhandler(e) {
    e.preventDefault()
    if(user.length || password.length ){
      alert("wrong value")
    }
    else{
      alert("right value login")
    }

  }

  function userhandler(e) {
    let item = e.target.value
    if (item.length < 3) {
      console.log('invalid');
      setusererr(true)
    }
    else {
      setusererr(false)
    }
    setuser(item)
  }

  function passwordhandler(e) {
    let item1 = e.target.value
    if (item1.length < 3) {
      console.log('invalid');
      setpasserr(true)
    }
    else {
      setpasserr(false)
    }
    setpassword(item1)
  }

  
  // function passwordhandler(e) {
  //   let pass = e.target.value
  //   // console.log(pass);
  //   if (pass.length < 3) {         //at here we use authntication.....................regex.... 
  //     setpassword(true);
  //   } else {
  //     setpassword(false);
  //   }

  // }



  return (
    <>
      <h1>login</h1>
      <form action="" onSubmit={loginhandler}>
        <input type="text" placeholder="enter uset id" id="ttt" onChange={userhandler} /><br />{usererr ? <span>invalid name</span> : null}
        <br />
        <input type="text" placeholder="enter the password" onChange={passwordhandler} /><br />{passerr ? <span>password is invalid</span> : null}
        <br /><br />
        <button type="submit">login</button>


      </form>



    </>
  )
}
