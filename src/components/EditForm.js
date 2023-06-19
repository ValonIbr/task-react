import React from 'react'

import { Form, Button } from "react-bootstrap";
import { ContactContext } from '../context/ContactContext';
import {useContext} from 'react';
import { useState } from 'react';
import "../index.css"




const EditForm = ({theContact}) => {

    const id = theContact.id;

    const[name, setName] = useState(theContact.name);
const[lastName, setLastName] = useState(theContact.lastName);
    const[addres, setAddres] = useState(theContact.addres); 
    const[city, setCity] = useState(theContact.city);
    const[country, setCountry] = useState(theContact.country);
    const[email, setEmail] = useState(theContact.email);
    const[number, setNumber] = useState(theContact.number);

    const {updateContact} = useContext(ContactContext);
    const updatedContact = {id,name,lastName,addres,city,country,email,number};

const [show,setShow] = useState(false);
const [showi,setShowi] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id,updatedContact)
}
return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className='form1'>
            <Form.Label>Name: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="name" 
                    value={name}
                    required
                   
                    onChange={(e)=> setName(e.target.value)}
                    
                />


            </Form.Group >
            <Form.Group className='form1'>
            <Form.Label>LatName: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter LastName"
                    required
                    name="lastName"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
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
                    onChange={(e)=> setAddres(e.target.value)}
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
                    onChange={(e)=> setCity(e.target.value)}
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
                    onChange={(e)=> setCountry(e.target.value)}
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
                    onChange={(e)=> setEmail(e.target.value)}
                />
                  <Button className='but1' onClick={()=>setShow(!show)}
                   variant="primary" type="button" 
            block>Add Email</Button>
            </Form.Group>
           
      {   
            show ? <Form.Group className='form1'>
                    <Form.Label>Email: </Form.Label>
    <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />    <Form.Label>Email: </Form.Label>
                   <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                />    <Form.Label>Email: </Form.Label>
                   <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    required
                    name="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  
                />

            </Form.Group>:null
            }
            <Form.Group className='form1'>
            <Form.Label>Number: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    name="number"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                   
                />

<Button className='but1' onClick={()=>setShowi(!showi)}
                   variant="primary" type="button" 
            block>Add Number</Button>
            </Form.Group>
            
            {   
            showi ? <Form.Group className='form1' >
                <Form.Label>Number: </Form.Label>
    <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    required
                    name="number"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                /><Form.Label>Number: </Form.Label>
                   <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    required
                    name="number"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                /><Form.Label>Number: </Form.Label>
                   <Form.Control
                    type="text"
                    placeholder="Enter Number"
                    required
                    name="number"
                    value={number}
                    onChange={(e)=> setNumber(e.target.value)}
                />

            </Form.Group>:null
            }

            <Button variant="primary" type="submit" 
            block>Save</Button>
        </Form>
    )
}



export default EditForm
