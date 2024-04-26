// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (assuming MongoDB is running locally)
mongoose.connect('mongodb://localhost:27017/coursesDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for the Course model
const courseSchema = new mongoose.Schema({
    name: String,
    description: String
});

// Define the Course model
const Course = mongoose.model('Course', courseSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to serve the HTML page
app.get('/', (req, res) => {
    // HTML template using template literals
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Add Course</title>
    </head>
    <body>
        <h1>Add Course</h1>
        <form id="courseForm">
            <label for="courseName">Course Name:</label>
            <input type="text" id="courseName" name="courseName">
            <br>
            <label for="courseDescription">Course Description:</label>
            <textarea id="courseDescription" name="courseDescription"></textarea>
            <br>
            <button type="submit">Add Course</button>
        </form>

        <script>
            // JavaScript code for handling form submission
            document.getElementById('courseForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent default form submission
                
                // Get form data
                var courseData = {
                    name: document.getElementById('courseName').value,
                    description: document.getElementById('courseDescription').value
                };

                // Send data to server
                fetch('/api/courses', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(courseData)
                })
                .then(response => {
                    if (response.ok) {
                        alert('Course added successfully!');
                    } else {
                        throw new Error('Failed to add course.');
                    }
                })
                .catch(error => {
                    console.error('Error adding course:', error);
                    alert('Error adding course. Please try again.');
                });
            });
        </script>
    </body>
    </html>
    `;

    // Send the HTML template as response
    res.send(htmlTemplate);
});

// Endpoint to add a new course
app.post('/api/courses', (req, res) => {
    const courseData = req.body;

    // Create a new course object
    const newCourse = new Course({
        name: courseData.name,
        description: courseData.description
    });

    // Save the course to the database
    newCourse.save((err) => {
        if (err) {
            console.error('Error adding course:', err);
            res.status(500).json({ error: 'Failed to add course.' });
        } else {
            console.log('Course added successfully:', newCourse);
            res.status(200).json({ message: 'Course added successfully.' });
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
