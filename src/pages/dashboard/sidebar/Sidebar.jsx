import {
  CurrencyBitcoin,
  SpaceDashboard,
  LocalShipping,
  PieChart,
  Thermostat,
  Workspaces,
  ExpandMore,
  ExpandLess,
  LightMode,
  DarkMode,
  Settings,
  Bolt,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { Collapse, styled } from "@mui/material";
import { useState } from "react";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: "8px 12px",
  borderRadius: "8px",
  "&.MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const Sidebar = () => {
  const [openOrders, setOpenOrders] = useState(false);
  const [openInvoices, setOpenInvoices] = useState(false);

  const handleOpen = () => {
    setOpenOrders(!openOrders);
  };
  const handleOpenInvoices = () => {
    setOpenInvoices(!openInvoices);
  };

  return (
    <Box className="h-full relative overflow-auto hideScrollbar">
      <div className="logo flex justify-start items-center">
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
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <SpaceDashboard
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
                    Overview
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <Thermostat
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
                    Smart Home
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <LocalShipping
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
                    Logistics
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <PieChart
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
                    Analytics
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <CurrencyBitcoin
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
                    Crypto
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
          </List>
        </div>
      </Box>
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
            <ListItem>
              <StyledListItemButton onClick={handleOpen}>
                <ListItemDecorator>
                  <SpaceDashboard
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
                    Orders
                  </Typography>
                </ListItemContent>
                {openOrders ? <ExpandLess /> : <ExpandMore />}
              </StyledListItemButton>
            </ListItem>
            <Collapse
              sx={{ marginInline: 2, borderLeft: "1px solid #f7f7f7" }}
              in={openOrders}
              timeout="auto"
              unmountOnExit
            >
              <List component="div">
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      List Orders
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      Create Order
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      Order Details
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
              </List>
            </Collapse>
            <ListItem>
              <StyledListItemButton onClick={handleOpenInvoices}>
                <ListItemDecorator>
                  <Thermostat
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
                    Invoices
                  </Typography>
                </ListItemContent>
                {openInvoices ? <ExpandLess /> : <ExpandMore />}
              </StyledListItemButton>
            </ListItem>
            <Collapse
              sx={{ marginInline: 2, borderLeft: "1px solid #f7f7f7" }}
              in={openInvoices}
              timeout="auto"
              unmountOnExit
            >
              <List component="div">
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      List Orders
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      Create Order
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
                <StyledListItemButton>
                  <ListItemContent sx={{}}>
                    <Typography
                      sx={{
                        color: "#f7f7f7",
                      }}
                      level="title-md"
                    >
                      Order Details
                    </Typography>
                  </ListItemContent>
                </StyledListItemButton>
              </List>
            </Collapse>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <LocalShipping
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
                    Products
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <PieChart
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
                    Customers
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <CurrencyBitcoin
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
                    Teams
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <CurrencyBitcoin
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
                    Tasks
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <CurrencyBitcoin
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
                    Settings
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
            <ListItem>
              <StyledListItemButton>
                <ListItemDecorator>
                  <CurrencyBitcoin
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
                    Blank
                  </Typography>
                </ListItemContent>
              </StyledListItemButton>
            </ListItem>
          </List>
        </div>
      </Box>

      <Box className="sticky bottom-0 w-full fadeGradient p-2 grid gap-5">
        <Box className="bg-zinc-900 p-1 rounded-md flex gap-1">
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
            color=""
          >
            Dark
          </Button>
        </Box>
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
              <Avatar src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSsGcqP-UjvcE68S9_C_v0inqPttIEu5nQjCiZzomPRPhA3jNlR" />
            </Badge>
            <div className="flex-1">
              <Typography
                sx={{
                  color: (theme) => theme.palette.neutral[50],
                }}
                level="title-md"
              >
                Manish Bagal
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.neutral[500],
                }}
                level="body-sm"
              >
                rene@devias.io
              </Typography>
            </div>
            <Chip size="sm" variant="soft" color="success">
              Admin
            </Chip>
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
            <div className="border border-zinc-500 rounded-md p-1 grid place-content-center hover:bg-zinc-800 cursor-pointer">
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
