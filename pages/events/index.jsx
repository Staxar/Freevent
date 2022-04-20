import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout'
import CardEvent from '../../components/CardEvent';

function EventsPage() {

const [events, setEvents] = useState ([]);

useEffect(async () => {
    try {
        const getEvents = await axios.get('http://localhost:3000/api/events');
        setEvents(getEvents.data);
    }catch(e) {
        console.error(e, "Error");
    }
}, []);


  return (
    <Layout> 
    <section className='events section' id='events'>
        <h2 className="section__title">Events</h2>
        <div className="events__container container grid">
        {events.map((event) =>{
            return(
              <CardEvent 
              key={event._id} 
              event={event} 
              eventid={event._id} />
              )            
          }        
        )}
        </div> 
    </section>
    </Layout>
  )
}

export default EventsPage