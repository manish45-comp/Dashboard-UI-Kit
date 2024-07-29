import {
  AttachMoney,
  People,
  ShoppingCartOutlined,
  TrendingUp,
} from "@mui/icons-material";
import { Avatar, Box, Card, Chip, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";
import { BarChart, PieChart } from "@mui/x-charts";
import { DataGrid } from "@mui/x-data-grid";

const setChipColor = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "On Hold":
      return "warning";
    case "Completed":
      return "success";
    default:
      return "neutral";
  }
};

const Overview = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box
      sx={{
        borderBottomRightRadius: { xs: 0, lg: 15 },
        borderBottomLeftRadius: { xs: 0, lg: 15 },
        marginBottom: { xs: 0, lg: 3 },

        padding: 3,
      }}
      className="bg-white"
    >
      <Typography level="h1">Overview</Typography>

      <Box
        sx={{ marginTop: 3 }}
        className={`grid gap-4 md:grid-cols-2 ${
          isXsScreen ? "grid-cols-1" : "grid-cols-3"
        }`}
      >
        <Card sx={{}}>
          <div className="flex items-center justify-start gap-2">
            <Chip
              sx={{ borderRadius: 5, aspectRatio: 1 }}
              size="sm"
              variant="soft"
              color="success"
            >
              <ShoppingCartOutlined color="success" />
            </Chip>
            <Typography level="body-sm">Total Sales</Typography>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <Typography level="h1">280</Typography>
            <div>
              <Chip
                startDecorator={<TrendingUp />}
                variant="plain"
                color="success"
              >
                35%
              </Chip>
              <Typography level="body-xs">vs last 7 days</Typography>
            </div>
          </div>
        </Card>
        <Card sx={{}}>
          <div className="flex items-center justify-start gap-2">
            <Chip
              sx={{ borderRadius: 5, aspectRatio: 1 }}
              size="sm"
              variant="soft"
              color="error"
            >
              <AttachMoney color="error" />
            </Chip>
            <Typography level="body-sm">Total Revenue</Typography>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <Typography level="h1">$639,456</Typography>
            <div>
              <Chip
                startDecorator={<TrendingUp />}
                variant="plain"
                color="success"
              >
                15%
              </Chip>
              <Typography level="body-xs">vs last 7 days</Typography>
            </div>
          </div>
        </Card>
        <Card sx={{}}>
          <div className="flex items-center justify-start gap-2">
            <Chip
              sx={{ borderRadius: 5, aspectRatio: 1 }}
              size="sm"
              variant="soft"
              color="warning"
            >
              <People color="warning" />
            </Chip>
            <Typography level="body-sm">Total Users</Typography>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <Typography level="h1">507,090</Typography>
            <div>
              <Chip
                startDecorator={<TrendingUp />}
                variant="plain"
                color="success"
              >
                50%
              </Chip>
              <Typography level="body-xs">vs last 7 days</Typography>
            </div>
          </div>
        </Card>
      </Box>
      <Box
        sx={{ marginTop: 3 }}
        className={`grid gap-4 ${isXsScreen ? "grid-cols-1" : "grid-cols-3"}`}
      >
        <Card className={isXsScreen ? "col-span-1" : "col-span-2"}>
          <div className="mt-1 grid gap-2">
            <Typography level="h4">Orders</Typography>
            <BarChart
              borderRadius={30}
              xAxis={[
                {
                  colorMap: {
                    type: "ordinal",
                    colors: [
                      "#ccebc5",
                      "#a8ddb5",
                      "#7bccc4",
                      "#4eb3d3",
                      "#2b8cbe",
                      "#08589e",
                    ],
                  },
                  scaleType: "band",
                  data: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                  ],
                },
              ]}
              series={[
                { data: [4, 3, 5, 5, 6, 7] },
                { data: [1, 6, 3, 8, 4, 1] },
              ]}
              height={400}
            />
          </div>
        </Card>

        <Card className="col-span-1">
          <div className="mt-1 grid gap-2">
            <Typography level="h4">Session by Device</Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Android" },
                    { id: 1, value: 15, label: "Apple" },
                    { id: 2, value: 20, label: "MAC" },
                    { id: 3, value: 40, label: "Windows" },
                  ],
                  innerRadius: 70,
                  outerRadius: 100,
                  paddingAngle: 0,
                  cornerRadius: 5,
                  startAngle: 360,
                  endAngle: 0,
                },
              ]}
              height={400}
            />
          </div>
        </Card>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Card>
          <div className="mt-1 grid gap-2">
            <Typography level="h4">Users Real-Time</Typography>
            <div className="object-cover w-full rounded-md overflow-hidden">
              <img
                className="w-full h-96 object-cover"
                src="https://placehold.co/1000x400?text=World+Map&font=roboto"
              />
            </div>
          </div>
        </Card>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`grid gap-4 ${isXsScreen ? "grid-cols-1" : "grid-cols-2"}`}
      >
        <Card>
          <div className="mt-1 grid gap-2">
            <Typography level="h4">Inbox</Typography>
            <DataGrid
              sx={{ border: 0 }}
              disableRowSelectionOnClick
              columns={[
                {
                  field: "User",
                  headerName: "User",
                  width: 50,
                  renderCell: () => <Avatar />,
                },
                { field: "name", headerName: "Name", width: 100 },
                { field: "message", headerName: "Message", width: 450 },
                {
                  field: "time",
                  headerName: "Time",
                  width: 90,
                },
              ]}
              rows={[
                {
                  id: 1,
                  name: "Olly Schroeder",
                  message: "Hey, would you like to collaborate?",
                  time: "5 min ago",
                },
                {
                  id: 2,
                  name: "Sienna Hewitt",
                  message:
                    "Well it's a really easy one, I'm sure we can make it half of the price.",
                  time: "15 min ago",
                },
                {
                  id: 3,
                  name: "Zaid Schwartz",
                  message:
                    "Sure thing, I'll have a look today. They're looking great!",
                  time: "23 min ago",
                },
                {
                  id: 4,
                  name: "Ammar Foley",
                  message:
                    "Hey, nice projects! I really liked the one in react. What's your quote on kinda...",
                  time: "32 min ago",
                },
                {
                  id: 5,
                  name: "Ammar Foley",
                  message:
                    "Hey, nice projects! I really liked the one in react. What's your quote on kinda...",
                  time: "32 min ago",
                },
              ]}
            />
          </div>
        </Card>
        <Card>
          <div className="mt-1 grid gap-2">
            <Typography level="h4">Current Tasks</Typography>
            <DataGrid
              sx={{ border: 0 }}
              disableRowSelectionOnClick
              columns={[
                { field: "description", headerName: "Task", width: 250 },
                { field: "time", headerName: "Duration", width: 150 },
                { field: "name", headerName: "Assign To", width: 150 },
                {
                  field: "status",
                  headerName: "Status",
                  width: 100,
                  renderCell: (params) => (
                    <Chip
                      variant={params.value === "Completed" ? "solid" : "soft"}
                      color={setChipColor(params.value)}
                    >
                      {params.value}
                    </Chip>
                  ),
                },
              ]}
              rows={[
                {
                  id: "1",
                  description: "Create a landing page for app",
                  time: "3h",
                  name: "John Dukes",
                  status: "Active",
                },
                {
                  id: "2",
                  description: "Copywriting for the website",
                  time: "1h",
                  name: "Ricky Smith",
                  status: "Active",
                },
                {
                  id: "3",
                  description: "Landing page development",
                  time: "2h",
                  name: "Amélie Laurent",
                  status: "On Hold",
                },
                {
                  id: "4",
                  description: "Discuss KPI with the team",
                  time: "4h",
                  name: "Jerry Helfer",
                  status: "Active",
                },
                {
                  id: "5",
                  description: "Product Review for market",
                  time: "12h",
                  name: "Rhonda Rhodes",
                  status: "Completed",
                },
                {
                  id: "6",
                  description: "UX research for landing page",
                  time: "8h",
                  name: "Paula Mora",
                  status: "Completed",
                },
                {
                  id: "7",
                  description: "Competitor Analysis",
                  time: "5h",
                  name: "Kenneth Allen",
                  status: "Completed",
                },
              ]}
            />
          </div>
        </Card>
      </Box>
    </Box>
  );
};

export default Overview;
