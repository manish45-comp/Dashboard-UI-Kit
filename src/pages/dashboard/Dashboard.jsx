import { Box } from "@mui/joy";
import Overview from "./Overview";
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
  return (
    <Box
      sx={{ padding: 3 }}
      className="w-screen h-screen bg-black flex gap-5 overflow-y-auto"
    >
      <Box sx={{ width: 280 }} className="sticky top-0 bg-black h-full">
        <Sidebar />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          borderRadius: 15,
          height: "fit-content",
          overflow: "hidden",
        }}
        className="bg-white"
      >
        <Overview />
      </Box>
    </Box>
  );
};

export default Dashboard;
