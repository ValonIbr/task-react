import React from 'react'
import { useContext } from 'react'
import { ContactContext } from '../context/ContactContext'
import {Modal,Button} from 'react-bootstrap'
import { useState } from 'react'
import EditForm from './EditForm'
import { useEffect } from 'react'
const Contact = ({contact}) => {
  const {deleteContact} = useContext(ContactContext);
  
  
  const [show,setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose= () =>setShow(false);

  useEffect(()=>{
        handleClose()
    },[contact])
 
  return (
 <>
 
    <td>{contact.name}</td>
    <td>{contact.lastName}</td>
    <td>{contact.addres}</td>
    <td>{contact.city}</td>
    <td>{contact.country}</td>
    <td>{contact.email}</td>
    <td>{contact.number}</td>
    <td>
        <button onClick={handleShow} className='edit btn btn-act'>Edit</button>
    </td>
    <td>
        <button  onClick={() => deleteContact(contact.id)} className='delete btn btn-act' 
        data-toggle="modal" tittle-="Delete">Delete</button>
    </td>
    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                  <Modal.Title>
                    Edit Contact
                    </Modal.Title>  
            </Modal.Header>
            <Modal.Body>
                    <EditForm theContact={contact} />
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

export default Contact
