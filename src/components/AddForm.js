import React from 'react'
import { Form, Button } from "react-bootstrap";
import { ContactContext } from '../context/ContactContext';
import {useContext} from 'react';
import { useState } from 'react';




const AddForm = () => {
const {AddContact} = useContext(ContactContext);
const [newContact, setNewContact] = useState(
  {  name:"",lastName:"",addres:"", city:"",country:"",
    email:"", number:""}
);
const handleSubmit =(e) =>{
    e.preventDefault();
    AddContact(name,lastName,addres,city,country,email,number);


}

const onInputChange = (e) =>{
    setNewContact({...newContact,[e.target.name]:e.target.value});

}
const {name,lastName,addres,city, country,email,number}=newContact;
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='form1'>
            <Form.Label>Name: </Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                    required

                />


            </Form.Group >
            <Form.Group className='form1'>
            <Form.Label>LastName: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter LastName"
                    required
                    name="lastName"
                    value={lastName}
                    onChange={(e) => onInputChange(e)}

                />


            </Form.Group>
            <Form.Group className='form1'>
            <Form.Label>Addres: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Addres"
                    required
                    name="addres"
                    value={addres}
                    onChange={(e) => onInputChange(e)}

                />


            </Form.Group>
            <Form.Group className='form1'>
            <Form.Label>City: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter City"
                    required
                    name="city"
                    value={city}
                    onChange={(e) => onInputChange(e)}

                />


            </Form.Group>
            <Form.Group className='form1'>
            <Form.Label>Country: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Country"
                    required
                    name="country"
                    value={country}
                    onChange={(e) => onInputChange(e)}

                />


            </Form.Group>
            <Form.Group className='form1'>
            <Form.Label>Email: </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}

                />


            </Form.Group>
            <Form.Group className='form1'>
            <Form.Label>Number: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    name="number"
                    value={number}
                    onChange={(e) => onInputChange(e)}


                />


            </Form.Group>
            <Button variant="primary" type="submit" 
            block>Add New Contact</Button>
        </Form>
    )
}

export default AddForm
