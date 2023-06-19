import { Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import Contact from './Contact';
import {useContext } from 'react';
import {ContactContext} from '../context/ContactContext';
import AddContact from './AddForm';


const ContactList = () => {
 
    const {contacts} = useContext(ContactContext);
    
    const [show,setShow] = useState(false);
    
    const handleShow = () => setShow(true);
    const handleClose= () =>setShow(false);

    useEffect(()=>{
        handleClose()
    },[contacts])
  return (

    <>
        <div className="table-title">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Contacts</h2>
                </div>
                <div className="col-sm-6">
                    <Button onClick={handleShow} className='btn btn-primay'
                    data-toggle="modal">Add Contact</Button>
                </div>
            </div>
        </div>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th>Name</th>
                <th>LastName</th>
                <th>Addres</th>
                <th>City</th>
                <th>Country</th>
                <th>Email</th>
                <th>Number</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
            </thead>
            <tbody>
              
                    { 
                        contacts.map(contact => (
                           
                            <tr key={contact.id}>
                            <Contact contact={contact}/>
                            </tr>
                        ))
                    }
               
              
            </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                  <Modal.Title>
                    Add Contact
                    </Modal.Title>  
            </Modal.Header>
            <Modal.Body>
                    <AddContact/>
            </Modal.Body>
            <Modal.Footer>
                    <Button variant="secondary"
                    onClick={handleClose}>
Close
                    </Button>
            </Modal.Footer>
        </Modal>

    </>
  )
}

export default ContactList
