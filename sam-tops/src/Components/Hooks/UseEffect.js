// useeffect====3 type
//         a.  no dependency
//         b. an empyt Array 
//         c.props or state values

// import React, { useEffect } from 'react'
import { useState, useEffect } from 'react'

export default function UseEffect() {
    const [num,setNum]=useState(0)
    const [data,setData]=useState("surat")
    

    useEffect(()=>{
      // num=num+1
        console.log('rendering....',num);
    })

    // useEffect(()=>{                    
    //     console.log('rendering....',num);
    // },[])                              ///====>ek var bydefault run thay jasepa6i gamete action par render nay thay
                                      //===>data upadte thay jase toy aa render nay thay


    // useEffect(()=>{
    //     console.log('rendering....',data);
    // })                                       //--->by defalut ek var rendre tahy jase thayte ---renf=dring...,surat  avse
                                            // parntu jayre koi detail par clcik karse tyare data update thse atele aa use effect pa6i render thase ane gave   ----------------rendering... pune  avse  ane have koi game te actiojn kasese aaa line run thay j karse jem 
                                            // rendring .....  pune         lakhlu avse 

      useEffect(()=>{
        console.log('rendring...',data);
        
      },[data])                                //--->ate here use define diffrnt state ===>keje state change hase tayre aaa render thase
                                              //--->pa6i second time tr btn par click karat jo state pa6u chnage thas eto j aa render yhase nakar render nahi thay 
                                              // apada aa kissa ma ek var click karta data c hange thay 6 atele render thase parntu biji var click karta data chage thato nathi atle render nahi thay.  
  return (  
    <>
    <div>UseEffect</div>
    <h1>{num}</h1>
    <h1>{data}</h1>
    <button onClick={()=>{setNum(num+1)}}>increment</button>
    <button onClick={()=>{setNum(num-1)}}>decrement</button>
    <button onClick={()=>{setData("pune")}}>detail</button>
    </>
  )
}
