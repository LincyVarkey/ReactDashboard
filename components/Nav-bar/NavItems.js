import { FaPen, FaUserAlt } from "react-icons/fa";
import { MdDashboard, MdRunningWithErrors, MdAddChart} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { LiaTableSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const NavItems = ({name}) => {

    const iconsComp = () => {
        switch(name) {
            case "Blog Dashboard":
                return <FaPen/>
                break;
            case "Blog Posts":
                return <MdDashboard/>
                break;
            case "Add New Post":
                return <MdAddChart/>
                break;
            case "Forms & Components":
                return <RxDashboard/>
                break;
            case "Tables":
                return <LiaTableSolid/>
                break;
            case "User Profile":
                return <FaUserAlt/>
                break;
            case "Errors":
            default:
                return <MdRunningWithErrors/>
                break;
          }
    }


    return (
        <Link to="/">
            <div className="nav-item display-flex">
                <div className="nav-icon">{iconsComp()}</div>
                <h4>{name}</h4>
            </div>
        </Link>
    )
}

export default NavItems;