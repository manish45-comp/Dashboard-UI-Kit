import { Box, Drawer, ModalClose } from "@mui/joy";
import Sidebar from "./sidebar/Sidebar";
import MenuAppBar from "./appbar/MenuAppBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(inOpen);
  };

  return (
    <Box
      sx={{ padding: { xs: 0, lg: 0 } }}
      className="w-screen h-screen bg-black flex overflow-hidden"
    >
      <Drawer variant="plain" open={open} onClose={toggleDrawer(false)}>
        <Box className="overflow-hidden bg-black" sx={{ padding: 3 }}>
          <Sidebar toggleDrawer={toggleDrawer} />
          <ModalClose />
        </Box>
      </Drawer>

      <Box
        sx={{ padding: 3, display: { xs: "none", lg: "block" }, width: 320 }}
        className="fixed top-0 bg-black h-full"
      >
        <Sidebar toggleDrawer={() => {}} />
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
          sx={{ zIndex: 99, paddingTop: { xs: 0, lg: 3 } }}
          className="sticky top-0 bg-black"
        >
          <MenuAppBar toggleDrawer={toggleDrawer} />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
