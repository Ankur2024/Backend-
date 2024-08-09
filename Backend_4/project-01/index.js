// Importing the required modules
const express = require('express');
const user = require('./data/UserData.json'); // Importing user data from JSON file

// Initializing the Express application
const app = express();
const PORT = 8000;

// Routes

// GET request for listing all users in JSON format
app.get('/api/users', (req, res) => {
    return res.json(user); // Responding with all user data in JSON format
});

// GET request for listing all users as an HTML unordered list
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${user.map((user) => `<li>${user.first_name}</li>`).join("")} 
        <!-- Creating an HTML list item for each user's first name -->
    </ul>
    `;
    res.send(html); // Sending the generated HTML as the response
});

// GET request for retrieving user details by their ID
app.route('/api/users/:id').get((req, res) => {
    const userId = Number(req.params.id); // Extracting user ID from the request parameters
    const ourUser = user.find(user => user.id === userId); // Finding the user by ID
    return res.json(ourUser); // Responding with the user details in JSON format
});

// POST request for creating a new user (Functionality to be implemented)
// Placeholder route for creating a user by their ID
app.route('/api/users/:id').post((req, res) => {
    // TODO: Implement the logic for creating a new user
});

// Placeholder POST request for a user (Functionality to be implemented)
// Intended to handle other POST operations, such as deleting a user
app.post('/api/users/:id', (req, res) => {
    // TODO: Implement the logic for deleting a user
});

// PATCH request for updating specific user data (Functionality to be implemented)
// Intended for partial updates of user data
app.route('/api/users/:id').patch((req, res) => {
    // TODO: Implement the logic for updating specific user data
});

// PUT request for replacing the user data entirely (Functionality to be implemented)
// Intended for full replacement of user data
app.route('/api/users/:id').put((req, res) => {
    // TODO: Implement the logic for replacing user data
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server started at port number ${PORT}`); // Logging the server start message
});
