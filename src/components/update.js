import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
export default function Update() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []);
     const   updateAPIData = async() => {
        await axios.put(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios/${id}`, {
            firstName,
             lastName,
             checkbox
        }).then(
            navigate('/read')
        )
    }
    return (
        <div>
        <Form className="create-form">
            <Form.Field>
                <label>Firsdt Name</label>
                <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' value={checkbox} onChange={(e) => setCheckbox(e.target.value)} />
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Ubdate</Button>
        </Form> 

        </div>
    )
}
