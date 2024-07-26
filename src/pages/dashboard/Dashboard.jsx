import { Box } from "@mui/joy";
import Sidebar from "./sidebar/Sidebar";
import MenuAppBar from "./appbar/MenuAppBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <Box
      sx={{ padding: { xs: 0, lg: 0 } }}
      className="w-screen h-screen bg-black flex overflow-hidden"
    >
      <Box
        sx={{ padding: 3, display: { xs: "none", lg: "block" }, width: 320 }}
        className="fixed top-0 bg-black h-full"
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          overflow: "hidden scroll",
          position: "relative",
          marginLeft: { xs: 0, lg: "320px" },
          paddingRight: { xs: 0, lg: 3 },
        }}
        className="bg-black"
      >
        <Box
          sx={{ paddingTop: { xs: 0, lg: 3 } }}
          className="sticky top-0 bg-black"
        >
          <MenuAppBar />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
