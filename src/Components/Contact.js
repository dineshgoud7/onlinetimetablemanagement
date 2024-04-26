import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle the form submission
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback about our Timetable Management System? We'd love to hear from you!
      </p>
      <div className="contact-info">
        <h2>Contact Information:</h2>
        <ul>
          <li>Email: info@timetablemanagement.com</li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="feedback-form">
        <h2>Leave Feedback:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="feedback">Your Feedback:</label>
            <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="4" required></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
