import React from 'react'
import CardEvent from './CardEvent'


export default function Events() {


  return (
    <section className='events section' id='events'>
        <h2 className="section__title">Events</h2>
        <div className="events__container container grid">
            <CardEvent />
        </div>
    </section>

  )
}
