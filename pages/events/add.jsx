import Layout from "../../components/Layout";
import axios from "axios";
import { useState } from "react";
import Calendar from 'react-calendar'

const Add = () => {
    const [inputs, setInputs] = useState({});
    const [pick, onPick] = useState(new Date())

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <Layout>
        <section className="add section">
        <div className="events__container container">
            <form onSubmit={handleSubmit}>
            <label>Event title:
            <input 
                type="text" 
                name="title" 
                value={inputs.title || ""} 
                onChange={handleChange}
            />
            </label>
            <label>Event description:
            <input 
                type="text" 
                name="desc" 
                value={inputs.desc || ""} 
                onChange={handleChange}
            />
            </label>
            <label htmlFor="image" className="form__label">
              Image:            
            <input
              type="file"
              name="image"
              value={inputs.image || ""} 
              onChange={handleChange}
            /></label>
            <label>City:
                <input 
                type="text" 
                name="city" 
                value={inputs.city || ""} 
                onChange={handleChange}
                />
            </label>
            <label>Date:
                <Calendar                 
                locale="pl-PL" 
                name="date"  
                pick={pick}    
                onPick={onPick}         
                />
            </label>
            <label>Tickets:
                <input 
                type="checkbox" 
                name="tickets" 
                value={inputs.tickets || ""} 
                onChange={handleChange}
                />
            </label>

                <input type="submit" />
            </form>
        </div>
        </section>
        </Layout>
    )
}

export default Add