import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Cities from "../components/Cities";
import axios from "axios";
export default function Base({ citiesList, eventsList }) {
  
    return (
      <Layout>
        <head>
          lang="en"
        </head>
        <Home />
        <About />
        <Events eventsList = { eventsList }/>
        <Cities citiesList = { citiesList }/>
      </Layout>               
    );
  }

  export const getServerSideProps = async() => {
    const city = await axios.get("http://localhost:3000/api/cities");
    const event = await axios.get("http://localhost:3000/api/events")
    return {
      props: {
        citiesList: city.data,
        eventsList: event.data,
      },      
    };    
  };