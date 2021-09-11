
import Topbar from "./Topbar/Topbar"
import './Campaign.css'
import Header from "./Header/Header"
import BasicTable from "../../Table/Table"
import TabBar from "./TabBar/TabBar"
import Footer from "./Footer/Footer"

function Campaign() {
    return (
        <div className="Campaign">
           <Topbar/>
           <Header/>
           <TabBar/>
         <BasicTable/>
        
         <Footer/>
        </div>
    )
}

export default Campaign
