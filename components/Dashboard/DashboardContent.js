import DashHeader from "./DashHeader";
import DashOverview from "./DashOverview";

const DashBoardContent = () => {
    return (
        <div className="dash-content">
            <DashHeader/>
            <DashOverview/>
        </div>
    );
}

export default DashBoardContent;