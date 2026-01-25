import { Link, Outlet } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <h2>EcoTrack Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link>{" | "}
        <Link to="reports">Reports</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Dashboard;
