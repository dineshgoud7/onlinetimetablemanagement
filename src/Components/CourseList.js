import React, { useState, useEffect } from 'react';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setCourses(jsonData);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            Course ID: {course.courseId}, Course Name: {course.courseName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
