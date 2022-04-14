import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Cities from "../components/Cities";
import axios from "axios";
export default function Base({ citiesList }) {
  
    return (
      <Layout>
        <Home />
        <About />
        <Events />
        <Cities citiesList = {citiesList}/>
      </Layout>               
    );
  }

  export const getServerSideProps = async() => {
    const res = await axios.get("http://localhost:3000/api/cities");
    return {
      props: {
        citiesList: res.data,
      },      
    };    
  };