import React from 'react'
import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const ContactContext = createContext()

const ContactContextProvider = (props) => {
    const [contacts, setContacts] = useState([
        {
            id: uuidv4(), name: 'Cyber', lastName: 'Maniak', addres: 'Prishtine',
            city: "Prishtina", country: "Kosova", email: "cybermaniaks@gmail.com",
            number: "038-44-900-900"
        },
        {
            id: uuidv4(), name: 'Fakulteti', lastName: 'Sh.Kompjuterike', addres: 'Rruga Shkronjave',
            city: "Prizren", country: "Kosova", email: "fshk@uni-prizren.com",
            number: "029-900-900"
        },
        {
            id: uuidv4(), name: 'Fakulteti', lastName: 'Juridik', addres: 'Rruga Shkronjave',
            city: "Prizren", country: "Kosova", email: "juridik@uni-prizren.com",
            number: "029-900-800"
        },
        {
            id: uuidv4(), name: 'Fakulteti', lastName: 'Ekonomik', addres: 'Rruga Shkronjave',
            city: "Prizren", country: "Kosova", email: "ekonomik@uni-prizren.com",
            number: "029-900-700"
        }
    ])

    const deleteContact = (id) => {
        setContacts(contacts.filter(contact =>
             contact.id !==id))
    }



    const AddContact = (name, lastName, addres, city, country,
         email, number) => {
        setContacts([ ...contacts,{id: uuidv4(), name, 
            lastName, addres, city, country,
             email, number }])}
    
const updateContact = (id, updatedContact) => {
    setContacts (contacts.map((contact) => contact.id === id ? updatedContact : contact))
}


    return (
        <ContactContext.Provider value={{ contacts,
         AddContact,deleteContact, updateContact }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider
