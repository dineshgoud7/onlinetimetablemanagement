// addcourse.js

// Function to handle adding a new course
function addCourse() {
    // Retrieve course details from form fields
    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
    const instructor = document.getElementById('instructor').value;
    const schedule = document.getElementById('schedule').value;
    const room = document.getElementById('room').value;

    // Validate input (e.g., check for empty fields)

    // Send an AJAX request to the server to add the course
    // Example:
    // fetch('/api/addcourse', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         courseName: courseName,
    //         courseCode: courseCode,
    //         instructor: instructor,
    //         schedule: schedule,
    //         room: room
    //     })
    // })
    // .then(response => {
    //     // Handle response from the server
    //     if (response.ok) {
    //         // Course added successfully, display a success message
    //         alert('Course added successfully!');
    //     } else {
    //         // Course addition failed, display an error message
    //         alert('Failed to add course. Please try again.');
    //     }
    // })
    // .catch(error => {
    //     // Handle errors from the server
    //     console.error('Error:', error);
    // });

    // For demonstration purposes, log course details to the console
    console.log('New Course Details:');
    console.log('Name:', courseName);
    console.log('Code:', courseCode);
    console.log('Instructor:', instructor);
    console.log('Schedule:', schedule);
    console.log('Room:', room);

    // Optionally, you can clear the form fields after adding the course
    document.getElementById('courseName').value = '';
    document.getElementById('courseCode').value = '';
    document.getElementById('instructor').value = '';
    document.getElementById('schedule').value = '';
    document.getElementById('room').value = '';
}

// Event listener to handle form submission
document.getElementById('add-course-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    addCourse(); // Call the addCourse function
});
