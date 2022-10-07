import { useSSRSafeId } from '@react-aria/ssr';
import React from 'react'
import { Table } from 'react-bootstrap';

export default function V35nestedlistnetsedarray() {
    const users = [
        {
            name: 'anil', email: 'anil@gmail.com',
            address: [{ home: 'hh', state: 'gujarat', country: 'india' }]
        },
        {
            name: 'xyz', email: 'xyz@gmail.com',
            address: [{ home: 'yy', state: 'zzz', country: 'india' }]
        }
    ]
    return (
        <>
            <Table border="2px" >
                <tbody>
                    <tr>
                        <td>Name </td>
                        <td>Email </td>
                        <td>Address </td>
                    </tr>
                </tbody>

                {
                    users.map((item,i
                        
                        
                        ) =>bb 
                        <tr key={i}>

                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Table border='2px'>
                                    <tbody>
                                        <tr>
                                            <td>home</td>
                                            <td>state</td>
                                            <td>country</td>
                                        </tr>
                                    </tbody>
                                    {
                                        item.address.map((data) => {
                                            return <tr>
                                                        <td>{data.home}</td>
                                                        <td>{data.state}</td>
                                                        <td>{data.country}</td>
                                                   </tr>

                                        }
                                    )}
                                </Table>
                            </td>
                        </tr>
                    )
                }

            </Table>
        </>
    )
}
