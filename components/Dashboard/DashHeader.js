import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
const DashHeader = () => {
    const [searchData, setSearchData] = useState("");

    return (
        <div className="dashboard-header display-flex">
            <div className="search-box display-flex ">
                <div className="search-icon"><CiSearch/></div>
                <input className="search" placeholder="Search for Something" value={searchData} onChange={(e) => {
                        setSearchData(e.target.value);
                    }}/>
            </div>
            <div className="notification">
                    <FaBell/>
            </div>
            <div className="profile-info display-flex">
                    <div className="padding"><CgProfile/></div>
                    <div className="padding">Lincy Varkey</div>
                    <div className="padding"><FaCaretDown/></div>
            </div>
        </div>
    )
}

export default DashHeader;