import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const ContactForm = ({ setContacts }) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        jobTitle: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page

        try {
            // Make a POST request to add the contact
            const response = await axios.post('http://localhost:5000/api/contacts', contact);
    
            if (response.status === 201) {
                // Successfully added the contact
                // Directly update the contacts state to include the new contact
                setContacts((prevContacts) => [...prevContacts, response.data]); // Add new contact to the state
            }
    
            // Reset the form fields
            setContact({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                jobTitle: ''
            });
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h2>Add a New Contact</h2>
                <form onSubmit={handleSubmit}>
                    <TextField label="First Name" name="firstName" value={contact.firstName} onChange={handleChange} fullWidth />
                    <TextField label="Last Name" name="lastName" value={contact.lastName} onChange={handleChange} fullWidth />
                    <TextField label="Email" name="email" value={contact.email} onChange={handleChange} fullWidth />
                    <TextField label="Phone Number" name="phoneNumber" value={contact.phoneNumber} onChange={handleChange} fullWidth />
                    <TextField label="Company" name="company" value={contact.company} onChange={handleChange} fullWidth />
                    <TextField label="Job Title" name="jobTitle" value={contact.jobTitle} onChange={handleChange} fullWidth />
                    <Button type="submit" variant="contained" color="primary">Add Contact</Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
