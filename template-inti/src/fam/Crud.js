import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';



export default function Crud() {
    const nevigate=useNavigate()
    const [userdata, setuseradata] = useState()

    const { id } = useParams

    useEffect(() => {
        getuser()
    }, [userdata])

    const getuser = () => {
        fetch("http://localhost:3005/user")
            .then((res) => res.json())
            .then((udata) => { setuseradata(udata) })
    }

    ///delete user function
    const deleteuser = (id) => {
        console.log('111111');
        fetch(`http://localhost:3005/user/${id}`, {
            method: "DELETE",
        });
    }

    //  

    return (
        <>
            <div className="container">
                <button className='btn btn-primary my-3' onClick={()=>{nevigate('/adduser')}}>Add USER</button>
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
                                {userdata && userdata.map((item) =>
                                    item.r_id == 1 ? " "
                                        :
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>
                                                    <a className='btn btn-primary mx-2' onClick={()=>{nevigate(`/adduser/${item.id}`)}}>Edit</a>
                                                    <a className='btn btn-danger mx-2' onClick={() => { deleteuser(item.id) }}>Delete</a>
                                                </td>
                                            </tr>
                                        </>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
