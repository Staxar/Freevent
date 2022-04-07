import Layout from "../components/Layout";
import Home from "../components/Home";
import About from "../components/About";
export default function Base() {
  
    return (
      <Layout>
        <Home />
        <About />
      </Layout>               
    );
  }