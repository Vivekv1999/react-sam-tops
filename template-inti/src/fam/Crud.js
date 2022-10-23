import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';



export default function Crud() {
    const nevigate = useNavigate()
    const [userdata, setuseradata] = useState()
    const { id } = useParams
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        getuser()
    })

    const getuser = () => {
        fetch("http://localhost:3005/user")
            .then((res) => res.json())
            .then((udata) => {
                setuseradata(udata)
                // setseachdata(udata)
            })
    }

    ///delete user function
    const deleteuser = (id) => {
        let text = "are you sure want to delte"
        if (window.confirm(text) == true) {
            fetch(`http://localhost:3005/user/${id}`, {
                method: "DELETE",
            });
        } else {
            alert("your data is saved...")
        }
    }


    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = userdata.filter((item) => {
                // console.log(Object.values(item),"vichittarrra"); =====> jova purtu kr su ave 6 m console ma
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(userdata)
        }
    }
    return (

        <>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    // value={q}
                    /*
                    // set the value of our useState q
                    //  anytime the user types in the search box
                    */
                    onChange={(e) => searchItems(e.target.value)}
                />
                {/* <Button variant="outline-success">Search</Button> */}
            </Form>
            <div className="container">
                <button className='btn btn-primary my-3' onClick={() => { nevigate('/adduser') }}>Add USER</button>
                <div className="row mt-6    ">
                    <div className="col-md-12">
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchInput.length > 1 ?
                                    (filteredResults && filteredResults.map((item) =>
                                        item.r_id == 1 ? " "
                                            :
                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <a className='btn btn-primary mx-2' onClick={() => { nevigate(`/adduser/${item.id}`) }}>Edit</a>
                                                        <a className='btn btn-danger mx-2' onClick={() => { deleteuser(item.id) }}>Delete</a>
                                                    </td>
                                                </tr>
                                            </>
                                    ))
                                    :
                                    (userdata && userdata.map((item) =>
                                        item.r_id == 1 ? " "
                                            :
                                            <>
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <a className='btn btn-primary mx-2' onClick={() => { nevigate(`/adduser/${item.id}`) }}>Edit</a>
                                                        <a className='btn btn-danger mx-2' onClick={() => { deleteuser(item.id) }}>Delete</a>
                                                    </td>
                                                </tr>
                                            </>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )

}
