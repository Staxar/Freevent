import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
export default function Base() {
  
    return (
      <Layout>
        <Home />
        <About />
        <Events />
      </Layout>               
    );
  }