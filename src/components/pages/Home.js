import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home=()=>{

    const [events, setEvent] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const result = await axios.get("http://localhost:3003/events");
    setEvent(result.data);
    console.log(result);
  };

  const deleteEvent = async id => {
    await axios.delete(`http://localhost:3003/events/${id}`);
    loadEvents();
  };

    return(
        <div className="container">
            <div className="py-2">
                <h1>Welcome to Find My Events</h1>
                <br/>
                <h4>Look for all the events here...</h4>
                <br/>
                <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Event Id</th>
              <th scope="col">Event Name</th>
              <th scope="col">Venue</th>
              <th scope="col">Date</th>
              <th>Manage Event</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id}>
                <th scope="row">{event.id}</th>
                <td>{event.name}</td>
                <td>{event.venue}</td>
                <td>{event.date}</td>
                <td>
                  <Link className="btn btn-primary mr-2" to={`/events/${event.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/events/edit/${event.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        

        
        
            </div>
        </div>
    );
};

export default Home;