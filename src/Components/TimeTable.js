import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Timetable = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://localhost:8081/timetable');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses for timetable:', error);
        }
    };

    return (
        <div>
            <h2>Timetable</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Course</th>
                        <th>Day</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course._id}>
                            <td>{course.time}</td>
                            <td>{course.name}</td>
                            <td>{course.day}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Timetable;
