import {
  CurrencyBitcoin,
  SpaceDashboard,
  LocalShipping,
  PieChart,
  Thermostat,
  Workspaces,
  ExpandMore,
  ExpandLess,
  Settings,
  Bolt,
  ShoppingCart,
  Receipt,
  Inventory,
  People,
  Business,
  Assignment,
  FilePresent,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Skeleton,
  Typography,
} from "@mui/joy";
import { Collapse, styled } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledListItemButton = styled(ListItemButton)(({ theme, active }) => ({
  padding: "6px 12px",
  borderRadius: "8px",
  "&.MuiListItemButton-root": {
    backgroundColor: active ? theme.palette.primary.main : "",
  },
  "&.MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const dashboardItems = [
  { path: "/dashboard", label: "Overview", icon: SpaceDashboard },
  { path: "/dashboard/smart-home", label: "Smart Home", icon: Thermostat },
  { path: "/dashboard/logistics", label: "Logistics", icon: LocalShipping },
  { path: "/dashboard/analytics", label: "Analytics", icon: PieChart },
  { path: "/dashboard/crypto", label: "Crypto", icon: CurrencyBitcoin },
];

const generalItems = [
  {
    path: "",
    label: "Orders",
    icon: ShoppingCart,
    subItems: [
      { path: "/dashboard/orders", label: "List Orders" },
      { path: "/dashboard/create", label: "Create Order" },
      { path: "/dashboard/details", label: "Order Details" },
    ],
  },
  {
    path: "",
    label: "Invoices",
    icon: Receipt,
    subItems: [
      { path: "/dashboard/invoices", label: "List Invoices" },
      { path: "/invoices/create", label: "Create Invoice" },
      { path: "/invoices/details", label: "Invoice Details" },
    ],
  },
  { path: "/dashboard/products", label: "Products", icon: Inventory },
  { path: "/dashboard/customers", label: "Customers", icon: People },
  { path: "/dashboard/teams", label: "Teams", icon: Business },
  { path: "/dashboard/tasks", label: "Tasks", icon: Assignment },
  { path: "/dashboard/settings", label: "Settings", icon: Settings },
  { path: "/dashboard/blank", label: "Blank", icon: FilePresent },
];

// eslint-disable-next-line react/prop-types
const Sidebar = ({ toggleDrawer }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);

  const checkActive = (path) => {
    return location.pathname === path;
  };

  const handleToggle = (label) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [label]: !prevOpen[label],
    }));
  };

  return (
    <Box
      className="bg-black h-full relative overflow-auto hideScrollbar"
      onClick={toggleDrawer(false)}
    >
      <div className="logo flex justify-between items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="40"
          fill="none"
          viewBox="0 0 176 40"
          className="w-24"
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
            clipRule="evenodd"
          ></path>
          <path
            fill="#fff"
            d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          ></path>
        </svg>
      </div>

      <Box className="mt-5 bg-zinc-900 p-2 rounded-md flex items-center gap-3">
        <div className="h-10 w-10 bg-black place-content-center place-items-center text-center rounded-md">
          <Workspaces sx={{ color: "#fff" }} />
        </div>
        <div>
          <Typography
            sx={{
              color: (theme) => theme.palette.neutral[500],
            }}
            level="body-sm"
          >
            Workspace
          </Typography>
          <Typography
            sx={{
              color: (theme) => theme.palette.neutral[50],
            }}
            level="title-md"
          >
            Development
          </Typography>
        </div>
      </Box>
      {/* dashboard tabs */}
      <Box className="mt-10">
        <Typography
          sx={{
            color: (theme) => theme.palette.neutral[500],
          }}
          level="title-sm"
        >
          Dashboards
        </Typography>
        <div className="mt-5">
          <List className="grid gap-3">
            {dashboardItems.map((item, i) => (
              <ListItem key={i}>
                <StyledListItemButton
                  active={checkActive(item.path) ? 1 : 0}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemDecorator>
                    <item.icon
                      sx={{
                        color: "#f7f7f7",
                      }}
                    />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      {item.label}
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Box>

      {/* general tabs */}
      <Box className="mt-10">
        <Typography
          sx={{
            color: (theme) => theme.palette.neutral[500],
          }}
          level="title-sm"
        >
          General
        </Typography>
        <div className="mt-5">
          <List className="grid gap-3">
            {generalItems.map((item, i) => (
              <React.Fragment key={i}>
                <ListItem>
                  <StyledListItemButton
                    onClick={
                      item.subItems
                        ? () => handleToggle(item.label)
                        : () => navigate(item.path)
                    }
                  >
                    <ListItemDecorator>
                      <item.icon sx={{ color: "#f7f7f7" }} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography sx={{ color: "#f7f7f7" }} level="title-md">
                        {item.label}
                      </Typography>
                    </ListItemContent>
                    {item.subItems ? (
                      open[item.label] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </StyledListItemButton>
                </ListItem>
                {item.subItems && (
                  <Collapse
                    sx={{
                      marginInline: 2,
                      paddingLeft: 2,
                      borderLeft: "0.5px solid",
                      borderColor: "##CDD7E1",
                    }}
                    in={open[item.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div">
                      {item.subItems.map((subItem) => (
                        <ListItem key={subItem.path}>
                          <StyledListItemButton
                            active={checkActive(subItem.path) ? 1 : 0}
                            onClick={() => navigate(subItem.path)}
                          >
                            <ListItemContent>
                              <Typography
                                sx={{ color: "#f7f7f7" }}
                                level="title-md"
                              >
                                {subItem.label}
                              </Typography>
                            </ListItemContent>
                          </StyledListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </div>
      </Box>

      <Box className="sticky bottom-0 w-full fadeGradient p-2 pt-10 grid gap-5">
        {/* <Box className="bg-zinc-900 p-1 rounded-md flex gap-1">
          <Button
            startDecorator={<LightMode />}
            className="flex-1"
            variant="solid"
            color="primary"
          >
            Light
          </Button>
          <Button
            startDecorator={<DarkMode />}
            className="flex-1"
            variant="solid"
            color="neutral"
          >
            Dark
          </Button>
        </Box> */}
        <Box className="bg-zinc-900 p-3 rounded-md">
          <div className="flex items-start justify-start gap-3">
            <Badge
              color="success"
              badgeInset="14%"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
            >
              <Avatar src={user?.image}>
                <Skeleton loading={isLoading} />
              </Avatar>
            </Badge>
            <div className="flex-1">
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  level="title-sm"
                  sx={{ width: 100 }}
                />
              ) : (
                <Typography
                  sx={{
                    color: (theme) => theme.palette.neutral[50],
                  }}
                  level="title-sm"
                >
                  {user?.firstName + " " + user?.lastName}
                </Typography>
              )}
              {isLoading ? (
                <Skeleton
                  animation="wave"
                  variant="text"
                  level="body-sm"
                  sx={{ width: 60 }}
                />
              ) : (
                <Typography
                  sx={{
                    color: (theme) => theme.palette.neutral[500],
                  }}
                  level="body-sm"
                >
                  {user?.username}
                </Typography>
              )}
            </div>

            {!isLoading && (
              <Chip
                sx={{ textTransform: "capitalize" }}
                size="sm"
                variant="soft"
                color="success"
              >
                {user?.role}
              </Chip>
            )}
          </div>
          <div className="mt-3 flex gap-2">
            <div className="border flex-1 border-zinc-500 rounded-md p-1 flex items-center justify-center hover:bg-zinc-800 cursor-pointer">
              <Typography color="primary">Upgrade to Pro</Typography>
              <Bolt
                sx={{
                  color: "#0B6BCB",
                }}
              />
            </div>
            <div
              onClick={() => {
                navigate("/dashboard/settings");
              }}
              className="border border-zinc-500 rounded-md p-1 grid place-content-center hover:bg-zinc-800 cursor-pointer"
            >
              <Settings
                sx={{
                  color: "#f7f7f7",
                }}
              />
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
