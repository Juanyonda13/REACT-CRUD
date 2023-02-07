import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useState} from 'react';
import axios from 'axios';


const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(true);

    const postData = () => {
        axios.post(`https://63e1a3829088775e1cf5642f.mockapi.io/usuarios`, {
            firstName,
            lastName,
            checkbox
        }).then(
            setFirstName(''),
            setLastName(''),
            setCheckbox(false)
        )
        console.log(checkbox);
    }
    // console.log(firstName)
    return (
        <Form className="create-form"  onSubmit={(e)=>{
            e.preventDefault();
            postData(firstName,lastName,checkbox)
        }}>
            <Form.Field>
                <label>Firsdt Name</label>
                <input placeholder='First Name' value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName}onChange={(e) => setLastName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' value={checkbox} onChange={(e) => setCheckbox(!checkbox)} />
            </Form.Field>
            <Button type='submit' >Submit</Button>
        </Form>
    )

}


export default Create