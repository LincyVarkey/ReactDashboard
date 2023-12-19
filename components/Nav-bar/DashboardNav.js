import NavItems from "./NavItems";
import { FaFire } from "react-icons/fa";
const DashboardNav = () => {

    const navItems = ["Blog Dashboard", "Blog Posts", "Add New Post", "Forms & Components", "Tables", "User Profile", "Errors"];

    return (
        <div className="dash-nav">
            <div className="nav-header display-flex">
                <div className="header-icon"><FaFire/></div>
                <h3 className="nav-header-name">Shards DashBoard</h3>
            </div>
            <div className="navItems-list">
                    {navItems.map((item, index) => {
                        return <NavItems name={item} key={index}/>
                    })}
                
            </div>
        </div>
    );
}

export default DashboardNav;