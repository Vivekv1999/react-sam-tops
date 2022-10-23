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
                    <>
                    <div className="container d-flex" >
                        <div className="box col-md-12">
                            <div className="img-box glow-on-hover">
                        
                                <img src={product.image} alt="" />
                            </div>
                            <div className="detail-box ">
                                <h5>
                                    {product.title}
                                </h5>
                                <h6>
                                    {product.price}
                                </h6>
                            </div>
                        </div>
                        <div className="box col-md-12">
                        <h1>kkk</h1>
                        </div>
                    </div>
                    </>
                    }
                </div>
            </section>
        </>
    )

     //////============================================
    // const [filtervalue, setfiltervalue] = useState()
    // const [searchdata,setseachdata]=useState([])
    
    // for searching user
    // const filterfunk = (e) => {
    //     setfiltervalue(e.target.value)

    //     if (e.target.value == " ") {
    //         setuseradata(searchdata)
    //     }
    //     else {
    //         console.log('ffff in');
    //         console.log(searchdata);            
    //         const filterresult = searchdata.filter(justcheck)

    //         function justcheck(searchdata) {
    //             return searchdata.name.toLowerCase().includes(e.target.value.toLowerCase())
    //           }

    //         console.log(filterresult,"nonoon");
            
    //         if (filterresult.length > 0) {
    //             console.log('nnnnnnnnn ');
                
    //             setuseradata(filterresult)
    //         }
    //     }

    // }

    // return (

    //     <>
    //         <Form className="d-flex">
    //             <Form.Control
    //                 type="search"
    //                 placeholder="Search"
    //                 className="me-2"
    //                 aria-label="Search"
    //                 value={filtervalue}
    //                 onChange={filterfunk}
    //             />
    //         </Form>
    //         <div className="container">
    //             <button className='btn btn-primary my-3' onClick={() => { nevigate('/adduser') }}>Add USER</button>
    //             <div className="row mt-6    ">
    //                 <div className="col-md-12">
    //                     <Table striped bordered hover size="sm">
    //                         <thead>
    //                             <tr>
    //                                 <th>#</th>
    //                                 <th>First Name</th>
    //                                 <th>Last Name</th>
    //                                 <th>Username</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {userdata && userdata.map((item) =>
    //                                 item.r_id == 1 ? " "
    //                                     :
    //                                     <>
    //                                         <tr>
    //                                             <td>{item.id}</td>
    //                                             <td>{item.name}</td>
    //                                             <td>{item.email}</td>
    //                                             <td>
    //                                                 <a className='btn btn-primary mx-2' onClick={() => { nevigate(`/adduser/${item.id}`) }}>Edit</a>
    //                                                 <a className='btn btn-danger mx-2' onClick={() => { deleteuser(item.id) }}>Delete</a>
    //                                             </td>
    //                                         </tr>
    //                                     </>
    //                             )}
    //                         </tbody>
    //                     </Table>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}
