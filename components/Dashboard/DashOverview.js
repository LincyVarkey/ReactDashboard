import DashUserData from "./DashUserData";
import UserBlogData from "./UserBlogData";

const DashOverview = () => {
    return (
        <div className="dash-overview">
            <div className="content-header padding">DASHBOARD</div>
            <div className="blog-overview padding">Blog Overview</div>
            <DashUserData/>
            <UserBlogData/>
        </div>
        )
}

export default DashOverview;