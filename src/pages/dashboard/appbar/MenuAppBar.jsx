/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Box } from "@mui/joy";
import { NotificationsNoneOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/store/authSlice";
import { removeUser } from "../../../redux/store/userSlice";

export default function MenuAppBar({ toggleDrawer }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <Box
      sx={{
        flexGrow: 1,
        borderTopRightRadius: { xs: 0, lg: 15 },
        borderTopLeftRadius: { xs: 0, lg: 15 },
        overflow: "hidden",
        borderBottom: "0.1px solid",
        borderBottomColor: (theme) => theme.palette.neutral[200],
      }}
    >
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "flex", lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <span className="flex-1"></span>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <NotificationsNoneOutlined />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                dispatch(logout());
                dispatch(removeUser());
              }}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar src={user?.image} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
