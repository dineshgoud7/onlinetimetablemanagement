import React, { useState } from 'react';
import ShowCourses from './ShowCourses';
import Timetable from './TimeTable';

const ParentComponent = () => {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    // Function to handle enrollment change
    const handleEnrollChange = (courseId, enrolled) => {
        if (enrolled) {
            // Enroll course
            setEnrolledCourses(prevEnrolledCourses => [...prevEnrolledCourses, courseId]);
        } else {
            // Unenroll course
            setEnrolledCourses(prevEnrolledCourses => prevEnrolledCourses.filter(id => id !== courseId));
        }
    };

    return (
        <div>
            <ShowCourses onEnrollChange={handleEnrollChange} />
            <Timetable enrolledCourses={enrolledCourses} />
        </div>
    );
};

export default ParentComponent;
