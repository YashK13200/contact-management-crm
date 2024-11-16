// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';

function App() {
  const [contacts, setContacts] = useState([]);

    // Function to fetch contacts from the backend
    const fetchContacts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/contacts');
            setContacts(response.data); // Update the contacts state
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };
      // Fetch contacts when the component mounts
      useEffect(() => {
        fetchContacts();
    }, []);

    return (
      <div>
        <h1>Contact Managemnt-CRM</h1>
            {/* <ContactForm />
            <ContactsTable /> */}
        <ContactForm fetchContacts={fetchContacts} setContacts={setContacts} />
        <ContactsTable contacts={contacts} />
        </div>
    );
}

export default App;
