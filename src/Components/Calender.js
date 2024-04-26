import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-03-14' },
    { title: 'Event 2', date: '2024-03-15' },
    { title: 'Meeting', date: '2024-03-16' },
  ]);

  const holidays = [
    { title: 'New Year', date: '2024-01-01' },
    { title: 'Christmas', date: '2024-12-25' },
    // Add more holidays as needed
  ];

  const festivals = [
    { title: 'Diwali', date: '2024-10-27' },
    { title: 'Eid al-Fitr', date: '2024-05-15' },
    // Add more festivals as needed
  ];

  const allEvents = [...events, ...holidays, ...festivals];

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    customDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      try {
        const response = await fetch('/api/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newEvent),
        });
        if (!response.ok) {
          throw new Error('Failed to add event');
        }
        const eventData = await response.json();
        setEvents(prevEvents => [...prevEvents, eventData]);
        setNewEvent({
          title: '',
          date: '',
          customDate: ''
        });
      } catch (error) {
        console.error('Error adding event:', error);
      }
    }
  };

  return (
    <div className="calendar-container">
      <div className="event-form">
        <h2>Add Event</h2>
        <form onSubmit={handleAddEvent}>
          <input
            type="text"
            name="title"
            placeholder="Event title"
            value={newEvent.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="customDate"
            placeholder="Custom Date (optional)"
            value={newEvent.customDate}
            onChange={handleInputChange}
          />
          <button type="submit">Add Event</button>
        </form>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={allEvents}
        />
      </div>
    </div>
  );
};

export default Calendar;
