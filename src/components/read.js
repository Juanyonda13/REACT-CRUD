import React from "react";
import { Table,Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios`).then(
            (res) => {
                setAPIData(
                    res.data
                )
            }
        )
    }, [])
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>E-mail address</Table.HeaderCell>
                        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                    <Link href="/update">
                                     <Button onClick={() => setData(data)}>Update</Button>
                                    </Link>
                                    
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>

            </Table>
        </div>
    )
}
const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)

}