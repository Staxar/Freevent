import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../../components/Layout'
import CitiesCard from '../../components/CitiesCard'

function CitiesPage() {
    const [cities, setCities] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const getCities = await axios.get('http://localhost:3000/api/cities');
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
            <div className="cities__container_grid container grid">
        {cities.map((city) =>{
            return(
              <CitiesCard
              key={city._id} 
              city={city}                />
              )            
          }        
        )}
        </div>
        </section>
    </Layout>
  )
}
export default CitiesPage
