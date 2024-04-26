import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => {
  const [events, setEvents] = useState([
    { title: 'Event 1', date: '2024-03-14' },
    { title: 'Event 2', date: '2024-03-15' },
    { title: 'Meeting', date: '2024-03-16' },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: ''
  });

  const handleEventClick = (clickInfo) => {
    const date = clickInfo.dateStr;
    setNewEvent(prevState => ({
      ...prevState,
      date
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      setEvents(prevEvents => [...prevEvents, newEvent]);
      setNewEvent({
        title: '',
        date: ''
      });
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
          <button type="submit">Add Event</button>
        </form>
      </div>
      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick} // This will capture click events on the calendar
        />
      </div>
    </div>
  );
};

export default Calendar;
