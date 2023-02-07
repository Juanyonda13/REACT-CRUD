import React from "react";
import { Table, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const navigate = useNavigate();

    const handleGoUpdate = (data) => {
        navigate("/update");
        setData(data)
    };
    useEffect(() => {
        axios.get(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios`).then(
            (res) => {
                setAPIData(res.data)
            })
    }, [])

    const getData = () => {
        axios.get(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios/${id}`).then(
            () => {
                getData()
            }
        )
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Registration Date</Table.HeaderCell>
                        <Table.HeaderCell>Acces</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map(
                        setTimeout((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => handleGoUpdate(data)}>Update</Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        },9000)
                    )}
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


