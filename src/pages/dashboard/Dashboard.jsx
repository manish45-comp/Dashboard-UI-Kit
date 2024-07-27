import { Box, Drawer, ModalClose } from "@mui/joy";
import Sidebar from "./sidebar/Sidebar";
import MenuAppBar from "./appbar/MenuAppBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/store/userSlice";

import toast, { Toaster } from "react-hot-toast";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const toggleDrawer = (inOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(inOpen);
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    if (isAuthenticated) {
      toast.success("Login successfully", { duration: 2000 });
    }
  }, [isAuthenticated]);

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

      <Toaster position="bottom-right" reverseOrder={false} />
    </Box>
  );
};

export default Dashboard;
