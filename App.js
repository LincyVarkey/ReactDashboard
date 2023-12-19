import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardNav from "./components/Nav-bar/DashboardNav";
import DashBoardContent from "./components/Dashboard/DashboardContent";
import OtherDashBoard from "./components/Dashboard/OtherDashboard";
import Error from "./components/Error";

const App = () => {
    return (
        <div className="dashboard-card display-flex">
            <DashboardNav/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter(
                    [{
                        path: "/",
                        element: <App/>,
                        children: [
                            {
                                path: "/",
                                element: <DashBoardContent/>,
                            },
                            {
                                path: "/other",
                                element: <OtherDashBoard/>
                            }],
                        errorElement: <Error/>
                    }]
                )

const rootRender = ReactDOM.createRoot(document.getElementById("root"));
rootRender.render(<RouterProvider router={appRouter}/>)
