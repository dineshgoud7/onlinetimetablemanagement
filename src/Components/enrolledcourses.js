import React from 'react';
import ShowCourses from './ShowCourses';
import Timetable from './Timetable';

const App = () => {
    // Mock enrolled courses data
    const enrolledCourses = [
        { id: 1, name: "Introduction to JavaScript", enrolled: true, time: "9:00 AM" },
        { id: 2, name: "Advanced JavaScript Concepts", enrolled: true, time: "11:00 AM" },
        { id: 3, name: "JavaScript Frameworks: React, Angular, Vue", enrolled: true, time: "1:00 PM" },
        { id: 4, name: "React Native Development", enrolled: true, time: "3:00 PM" },
        { id: 5, name: "Node.js Backend Development", enrolled: true, time: "5:00 PM" }
    ];

    return (
        <div>
            <ShowCourses />
            <Timetable enrolledCourses={enrolledCourses} />
        </div>
    );
};

export default App;
