import React from 'react'
import Layout from '../../components/Layout'

export default function CitiesAdd() {

    async function handleSubmit(e) {
        const form = new FormData(cityForm.current);
        const payload = {
            city: form.get('city'),
            country: form.get('country'),
            voivodeship: form.get('voivodeship'),
            postal_code: form.get('postal_code'),

        }
    }

  return (
    <Layout>
        <section className="add section">
            <div className="cities__container container">
                <form action="#" onSubmit={handleSubmit}>
                    <label>City</label>
                    <input 
                    type='text'
                    name='city'
                    valeu></input>

                </form>
            </div>
        </section>
    </Layout>
  )
}
