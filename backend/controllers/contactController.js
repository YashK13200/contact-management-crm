const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
