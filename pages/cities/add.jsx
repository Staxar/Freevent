import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function CitiesAdd() {
  const cityForm = useRef();
  const [error, setError] = useState();
  const [formProcessing, setFormProcessing] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  async function handleSubmit(e) {
    if (formProcessing) return;
    setFormProcessing(true);
    setError(null);
    const form = new FormData(cityForm.current);
    const payload = {
      city: form.get("city"),
      lat: form.get("latidude"),
      lng: form.get("length"),
      country: form.get("country"),
      iso2: form.get("iso2"),
      voivodeship: form.get("voivodeship"),
      capital: form.get("capital"),
      population: form.get("population"),
      population_proper: form.get("population_proper"),
    };

    const response = await fetch(`/api/cities`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setFormProcessing(false);
      router.push("/events");
    } else {
      const payload = await response.json();
      setFormProcessing(false);
      setError(payload.error);
    }
  }

  return (
    <Layout>
      <section className="add section">
        <div className="cities__container container">
          <form onSubmit={handleSubmit} ref={cityForm}>
            {error && <div className="form__error">{error}</div>}
            <label htmlFor="html">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City name"
              required
            ></input>
            <label htmlFor="html">Latidude</label>
            <input
              type="text"
              name="latidude"
              id="latidude"
              placeholder="Latidude"
            ></input>
            <label htmlFor="html">Length</label>
            <input
              type="text"
              name="length"
              id="length"
              placeholder="Length"
            ></input>
            <label htmlFor="html">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
            ></input>
            <label htmlFor="html">Iso2</label>
            <input type="text" name="iso2" id="iso2" placeholder="iso2"></input>
            <label htmlFor="html">Voivodeship</label>
            <input
              type="text"
              name="voivodeship"
              id="voivodeship"
              placeholder="Voivodeship"
            ></input>
            <label htmlFor="html">Capital</label>
            <input
              type="text"
              name="capital"
              id="capital"
              placeholder="Capital"
            ></input>
            <label htmlFor="html">Population</label>
            <input
              type="text"
              name="population"
              id="population"
              placeholder="Population"
            ></input>
            <label htmlFor="html">Population_proper</label>
            <input
              type="text"
              name="population_proper"
              id="population_proper"
              placeholder="Population_proper"
            ></input>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
