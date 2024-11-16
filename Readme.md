# Contact-Managemnt-CRM

## Project Description

The **Contact Management CRM** is a web application that allows users to manage their contact information. It includes features such as:

- Viewing contacts in a table with pagination and sorting.
- Editing existing contact information.
- Deleting contacts.
- Updating contact data.

### Backend URL 
To add in the Frontend , in place of localhost(endpoints) we have to use this:
(for live purpose)
```bash
https://contact-backend-rij0.onrender.com/api/contacts
```
The application is built using **React.js** for the frontend, **Node.js (Express)** for the backend, and a **MongoDB** database to store contact information.








https://github.com/user-attachments/assets/03780d62-71c6-4fb2-a648-8221b649bc54

<img width="959" alt="CRM" src="https://github.com/user-attachments/assets/812d62db-4384-442f-98a6-a630bd1c064b">



<img width="668" alt="crm1" src="https://github.com/user-attachments/assets/af5036e6-0ede-4424-b977-567967f09947">



### Features

- **CRUD Operations** (Create, Read, Update, Delete) for contacts.
- **Pagination** to view contacts in manageable chunks.
- **Sorting** to sort contact data by various fields.
- **Editing** and updating contact details via a dialog interface.
- **Deleting** contacts from the list.
- **Responsive UI** using Material UI for design.

---

## Technologies Used

- **Frontend**: React.js, Material UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios
- **Others**: Mongoose (for MongoDB object modeling)

---

## Setup Instructions

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/YashK13200/contacts-manager.git
cd contact-management
```

### 2. Backend Setup (Node.js)
Navigate to the backend folder:

 ```bash
   cd Backend
   ```
Install dependencies:
 ```bash
   npm install
   ```

Create a .env file in the backend directory and add the following configuration:
 ```bash
   MONGODB_URI=mongodb://localhost:27017/contacts
   PORT=5000
   ```
Replace mongodb://localhost:27017/contacts with your actual MongoDB connection string.

Start the backend server:
 ```bash
   npm node app.js
   ```
localhost:5000/api/contacts

### 3. Frontend Setup (React)
Navigate to the frontend folder:
 ```bash
 cd frontend
 npm install
   ```
Start the frontend development server:
 ```bash
 npm run dev
   ```
This will start the frontend on http://localhost:5171.

### 4. Database Setup
You need a MongoDB database to store the contacts. You can either:

Use a local MongoDB instance, or
Use a cloud MongoDB service like MongoDB Atlas.
If you're using a local MongoDB instance, make sure it's running on localhost:27017 (or update the .env file accordingly).

Once the server is running, the database schema will be automatically created when the application first interacts with the database.

### Database Schema
MongoDB Collections
The app uses the Contacts collection to store contact details. The schema for each contact is as follows:
 ```bash
 {
  "_id": ObjectId,                // MongoDB's unique identifier
  "firstName": "String",           // Contact's first name
  "lastName": "String",            // Contact's last name
  "email": "String",               // Contact's email address
  "phoneNumber": "String",         // Contact's phone number
  "company": "String",             // Contact's company
  "jobTitle": "String"             // Contact's job title
}

   ```
### How the Application Works
### Frontend (React.js):
Displays the contact list in a table with sorting and pagination.
Users can edit or delete contacts.
Contacts are fetched from the backend API (/api/contacts).
A dialog box is used for editing contact information.

### Backend (Node.js & Express):
Provides RESTful API endpoints to perform CRUD operations.
/api/contacts - GET all contacts.
/api/contacts/:id - GET, PUT, DELETE a single contact by ID.
Contacts are stored in MongoDB, and interactions with the database are done using Mongoose.

### Challenges and Solutions
### Challenge 1: Implementing Sorting and Pagination
Sorting and pagination are essential for handling large datasets. While React provides state management, managing sorted and paginated data with API calls proved challenging.

Solution:
Sorting: Implemented client-side sorting using the Array.sort() method, which allows sorting contacts based on selected fields.
Pagination: Implemented pagination logic using Material UI's TablePagination component, which works in conjunction with the frontend state to display a manageable number of contacts per page.

### Challenge 2: Synchronizing Frontend and Backend for Editing
Managing data updates between the frontend and backend when editing contacts required ensuring consistency.

Solution:
Implemented an editing dialog that fetches the contact data when editing begins, and sends an updated object to the backend on submission.
The backend updates the database, and the frontend reloads the data after the update is successful, ensuring synchronization.

### Challenge 3: Managing Async Calls and UI Responsiveness
Managing async API calls and ensuring that the UI remains responsive while waiting for data fetching or updating.

Solution:
Used useEffect hooks to handle the fetching of contact data when the component mounts.
Implemented loading states and re-rendering to show real-time updates after editing or deleting contacts.

### Acknowledgements
Material UI: A popular React component library used for UI elements.
Axios: A promise-based HTTP client for making API requests.
MongoDB: NoSQL database for storing contact information.

### Key Points Covered:
1. **Project Description**: Summarizes the features of your app and technologies used.
2. **Setup Instructions**: Detailed steps to set up both the backend and frontend.
3. **Database Schema**: Describes the MongoDB schema.
4. **Technical Decisions**: Brief explanation of how the app is structured.
5. **Challenges and Solutions**: Addresses challenges faced during development and how they were resolved.



