import Header from "./Header"
import Footer from "./Footer"

function Layout({children}) {

    return (
        <div className="">
            <Header />
            <div className="main"> {children} </div>
            <Footer />
        </div>
    )
  }
  export default Layout