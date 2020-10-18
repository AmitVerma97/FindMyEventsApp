import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddEvent = () => {
  let history = useHistory();
  const [event, setEvent] = useState({
    name: "",
    venue: "",
    timing: "",
    date:"",
    organiser:""
  });

  const { name, venue, timing, date, organiser } = event;
  const onInputChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/events", event);
    history.push("/");
  };
  return (
    <div className="container">
      <br/>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Create an Event</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter name of the event"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Venue</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter venue of the event"
              name="venue"
              value={venue}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Timing</label>
            <input
              type="time"
              className="form-control form-control-lg" required
              placeholder="Enter timing of the event"
              name="timing"
              value={timing}
              onChange={e => onInputChange(e)}
            />
          </div>
          
         <div className="form-group">
         <label>Date</label>
            <input
              type="date"
              className="form-control form-control-lg" required
              placeholder="Enter date of the event" 
              name="date"
              value={date}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Organiser</label>
            <input
              type="text"
              className="form-control form-control-lg" required
              placeholder="Enter name of the organiser of the event"
              name="organiser"
              value={organiser}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          <button className="btn btn-primary btn-block">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
