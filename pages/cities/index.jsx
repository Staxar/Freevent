import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'

export default function CitiesPage() {
    const [cities, setCities] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const getCities = await axios.get('http://localhost3000/api/cities')
                setCities(getCities.data);
            }catch(e) {
                console.error(e, "Error CitiesPage");
            }
        }
        fetchData();
      }, [])


  return (
    <Layout>
        <section className="cities__section section">
            <h2 className="section__title">Cities</h2>
            <div className="cities__container container grid">
        {cities.map((city) =>{
            return(
              <CardEvent 
              key={city._id} 
              event={city} 
              eventid={city._id} />
              )            
          }        
        )}
        </div>
        </section>
    </Layout>
  )
}
