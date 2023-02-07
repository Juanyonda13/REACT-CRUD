import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';


const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios`, {
            firstName,
            lastName,
            checkbox
        })
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>Firsdt Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type='submit' onClick={postData} >Submit</Button>
        </Form>
    )

}


export default Create