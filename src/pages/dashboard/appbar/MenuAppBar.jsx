/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  Dropdown,
  Menu,
  MenuButton,
  MenuItem,
  Skeleton,
} from "@mui/joy";
import {
  CreditCard,
  Logout,
  NotificationsNoneOutlined,
  Person,
  Settings,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/store/authSlice";
import { removeUser } from "../../../redux/store/userSlice";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar({ toggleDrawer }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);

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
            <Dropdown>
              <MenuButton
                variant="soft"
                color="primary"
                sx={{ marginBlock: 1, aspectRatio: 1, borderRadius: 40 }}
              >
                <Avatar size="sm" src={user?.image}>
                  <Skeleton loading={isLoading} />
                </Avatar>
              </MenuButton>
              <Menu placement="bottom-end" color="primary" variant="soft">
                <MenuItem onClick={() => navigate("/dashboard/settings")}>
                  <Person />
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/dashboard/settings/security")}
                >
                  <Settings />
                  Security
                </MenuItem>
                <MenuItem
                  onClick={() => navigate("/dashboard/settings/billing")}
                >
                  <CreditCard />
                  Billing
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(logout());
                    dispatch(removeUser());
                  }}
                >
                  <Logout />
                  Logout
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
