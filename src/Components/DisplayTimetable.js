// DisplayTimetable.js

import React from 'react';

// Define the DisplayTimetable component
const DisplayTimetable = ({ course }) => {
    return (
        <div>
            <h3>Course: {course.name}</h3>
            <p>Time: {course.time}</p>
            <p>Room Number: {course.room}</p>
        </div>
    );
};

export default DisplayTimetable;
