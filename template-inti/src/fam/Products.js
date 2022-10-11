import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Products() {
    const [product, setproduct] = useState(null)

    useEffect(() => {
        getproduct()
    }, [product])

    const getproduct = async () => {
        let url = "https://fakestoreapi.com/products"
        let data = await fetch(url);
        let parsedata = await data.json()
        setproduct(parsedata)
        console.log(setproduct(parsedata));


        ///2nd method====
        // fetch('https://fakestoreapi.com/products')
        // .then((result)=> result.json())
        // .then((data)=>{console.log(data);
        //     setproduct(data)
        // })
    }


    return (
        <>
            {/* <!-- inner page section --> */}
            <section className="inner_page_head">
                <div className="container_fuild">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <h3>Product Grid</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- product section --> */}
            <section className="product_section layout_padding">
                <div className="container">
                    {/* <div className="heading_container heading_center">
                        <h2>
                            Our <span>products</span>
                        </h2>
                    </div> */}
                    <div className="row">
                        {product && product.map((item) => {
                            return <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                                <div className="box">
                                    <div className="option_container">
                                        <div className="options">
                                            <Link to={`/single/${item.id}`} className="option1">
                                                Add To Cart
                                            </Link>
                                            <a className="option2">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="img-box">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            {item.title}
                                        </h5>
                                        <h6>
                                            ${item.price}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

            {/* <!-- footer section --> */}
            {/* <footer className="footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-col">
                            <div className="footer_contact">
                                <h4>
                                    Reach at..
                                </h4>
                                <div className="contact_link_box">
                                    <a href>
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span>
                                            Location
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span>
                                            Call +01 1234567890
                                        </span>
                                    </a>
                                    <a href>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span>
                                            demo@gmail.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <div className="footer_detail">
                                <a href="index.html" className="footer-logo">
                                    Famms
                                </a>
                                <p>
                                    Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
                                </p>
                                <div className="footer_social">
                                    <a href>
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                    </a>
                                    <a href>
                                        <i className="fa fa-pinterest" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer-col">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="col-lg-7 mx-auto px-0">
                            <p>
                                © <span id="displayYear" /> All Rights Reserved By
                                <a href="https://html.design/">Free Html Templates</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer> */}

        </>
    )
}
