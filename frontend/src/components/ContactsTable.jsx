import React, { useEffect, useState } from 'react';  
import { Table, TableHead, TableRow, TableCell, TableBody, Button, TablePagination, TableSortLabel, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import ContactForm from '../components/ContactForm';  // Import the ContactForm component

const ContactsTable = () => {
    const [contacts, setContacts] = useState([]);
    const [editingContact, setEditingContact] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortField, setSortField] = useState('firstName');

    // Fetch contacts from the API
    const fetchContacts = async () => {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data);
    };

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:5000/api/contacts/${id}`);
        fetchContacts();
    };

    const handleEdit = (contact) => {
        setEditingContact(contact);
    };

    const handleEditChange = (e) => {
        setEditingContact({ ...editingContact, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = async () => {
        await axios.put(`http://localhost:5000/api/contacts/${editingContact._id}`, editingContact);
        fetchContacts();
        setEditingContact(null);
    };

    const handleSort = (field) => {
        const isAsc = sortField === field && sortOrder === 'asc';
        setSortOrder(isAsc ? 'desc' : 'asc');
        setSortField(field);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const sortedContacts = [...contacts].sort((a, b) => {
        if (a[sortField] < b[sortField]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortField] > b[sortField]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <>
            <h1>Contact Manager</h1>
            {/* <ContactForm fetchContacts={fetchContacts} />   */}
            <div className="contacts-table">
                <Table>
                    <TableHead>
                        <TableRow>
                            {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((field) => (
                                <TableCell key={field}>
                                    <TableSortLabel
                                        active={sortField === field}
                                        direction={sortOrder}
                                        onClick={() => handleSort(field)}
                                    >
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedContacts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((contact) => (
                            <TableRow key={contact._id}>
                                <TableCell>{contact.firstName}</TableCell>
                                <TableCell>{contact.lastName}</TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.phoneNumber}</TableCell>
                                <TableCell>{contact.company}</TableCell>
                                <TableCell>{contact.jobTitle}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleEdit(contact)}>Edit</Button>
                                    <Button onClick={() => deleteContact(contact._id)} color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={contacts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            </div>
            
            <Dialog open={Boolean(editingContact)} onClose={() => setEditingContact(null)}>
                <DialogTitle>Edit Contact</DialogTitle>
                <DialogContent>
                    <TextField label="First Name" name="firstName" value={editingContact?.firstName} onChange={handleEditChange} fullWidth />
                    <TextField label="Last Name" name="lastName" value={editingContact?.lastName} onChange={handleEditChange} fullWidth />
                    <TextField label="Email" name="email" value={editingContact?.email} onChange={handleEditChange} fullWidth />
                    <TextField label="Phone Number" name="phoneNumber" value={editingContact?.phoneNumber} onChange={handleEditChange} fullWidth />
                    <TextField label="Company" name="company" value={editingContact?.company} onChange={handleEditChange} fullWidth />
                    <TextField label="Job Title" name="jobTitle" value={editingContact?.jobTitle} onChange={handleEditChange} fullWidth />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setEditingContact(null)} color="primary">Cancel</Button>
                    <Button onClick={handleEditSubmit} color="primary">Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ContactsTable;
