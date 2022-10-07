import React, { useEffect } from "react";
import { useState } from "react";
import styles from './xyz.module.css'


export default function Products() {
    // const [Products, setProduts] = useState();

    const data = [
        { name: 'nokia', price: 666, description: "stronf phone" ,image: "/nokiaa.jpg"},
        { name: 'samsung', price: 845, description: "good phone" ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmkiMgpIFQf1WvoQBEX88cLTSFTueyawTDA&usqp=CAU"},
        { name: 'sony', price: 1950, description: "very nice phone" ,image: "https://m.media-amazon.com/images/I/814OFw0LZ4L.jpg"},
        { name: 'iphone', price: 7120, description: "status phone" ,image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYE273VqMNAymYzzf6ocPu0uBwjj2wO1Lww&usqp=CAU"}
    ]

    // useEffect(() => {
    //     setProduts(data)
    // },[Products])

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    {data.map((item)=>
                    <div className="col md-1 my-3" >
                        <div className="card" style={{width: "250px"}} >
                            <img src={item.image} height="250px" width={"50px"} className="card-img-top" alt="loading.." />
                                <div className="card-body">
                                    <h5 className={`card-title ${styles.textc}`} >{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href="/" target="_blank"className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}
