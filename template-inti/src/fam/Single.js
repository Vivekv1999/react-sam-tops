import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Single() {
    const { id } = useParams()
    const [product, setproduct] = useState()
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(result => result.json())
            .then((data) => {
                setproduct(data)
                console.log(data);
            })
    })
    return (
        <>
            <section className="product_section layout_padding">
                <div className="col-sm-6 col-md-4 col-lg-3">

                    {product &&
                        <div className="box">
                            <div className="img-box">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="detail-box">
                                <h5>
                                    {product.title}
                                </h5>
                                <h6>
                                    {product.price}
                                </h6>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}
