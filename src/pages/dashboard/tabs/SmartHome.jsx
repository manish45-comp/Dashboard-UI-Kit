import {
  AcUnit,
  Add,
  KitchenOutlined,
  LightbulbOutlined,
  Loop,
  SpeakerGroupOutlined,
  TvOutlined,
  VideocamOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import { Switch, Box, Button, Card, Chip, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";
import { BarChart, LineChart, PieChart } from "@mui/x-charts";

const SmartHome = () => {
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
      <Box className="flex items-center justify-between">
        <Typography level="h1">Smart Home</Typography>
        <div className="flex items-center justify-end gap-1">
          <Button variant="outlined" color="neutral">
            All
          </Button>
          <Button variant="soft" color="neutral">
            Bedroom
          </Button>
          <Button variant="soft" color="neutral">
            Living Room
          </Button>
          <Button variant="soft" color="neutral">
            <Add />
          </Button>
        </div>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`grid grid-cols-12 gap-4 ${
          isXsScreen ? "grid-cols-1" : ""
        } `}
      >
        <Box
          className={`flex-1 flex flex-col gap-4 ${
            isXsScreen ? "col-span-12" : "col-span-8"
          }`}
        >
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Today&apos;s Power Usage</Typography>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                  },
                  {
                    data: [2, 5, 6, 1, 1, 1],
                  },
                ]}
                height={300}
              />
            </div>
          </Card>
          <div className={`flex ${isXsScreen ? "flex-col" : ""} gap-4`}>
            <Card className="flex-1">
              <div className="mt-1 grid gap-2">
                <Typography level="h4">Consumption By Room</Typography>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 4, value: 80, label: "Study" },
                        { id: 0, value: 10, label: "Living Room" },
                        { id: 1, value: 15, label: "Bedroom" },
                        { id: 2, value: 20, label: "Kitchen" },
                        { id: 3, value: 40, label: "Bathroom" },
                        { id: 5, value: 5, label: "Washroom" },
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
            <Card className="flex-1">
              <div className="mt-1 grid gap-2">
                <Typography level="h4">Recent Activity</Typography>
              </div>
            </Card>
          </div>
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Appliances</Typography>
              <Box
                sx={{
                  display: "grid",
                  gap: 2,
                  gridTemplateColumns: {
                    sm: "1fr",
                    md: "1fr 1fr",
                    lg: "1fr 1fr 1fr",
                  },
                }}
              >
                {[
                  {
                    type: "Smart TV",
                    units: 2,
                    kWh: 42,
                    icon: <TvOutlined />,
                    id: "fdf74db9-9d5a-4034-8100-2189f97d4ff9",
                  },
                  {
                    type: "Air Conditioner",
                    units: 2,
                    kWh: 87,
                    icon: <AcUnit />,
                    id: "bc9a41a9-5964-4ba6-9a54-bbb1876b88a5",
                  },
                  {
                    type: "Smart Lamp",
                    units: 18,
                    kWh: 25,
                    icon: <LightbulbOutlined />,
                    id: "096a7495-7125-4f99-b965-f27d7b94cd53",
                  },
                  {
                    type: "Smart Fans",
                    units: 11,
                    kWh: 37,
                    icon: <Loop />,
                    id: "bb58eb75-d8e6-4343-a258-672beef0b006",
                  },
                  {
                    type: "Speaker",
                    units: 5,
                    kWh: 58,
                    icon: <SpeakerGroupOutlined />,
                    id: "cd643fc6-dc7c-44ae-a116-8173de553b0f",
                  },
                  {
                    type: "CCTV",
                    units: 9,
                    kWh: 63,
                    icon: <VideocamOutlined />,
                    id: "7576c80d-63c5-462e-ae3f-fee1348e18c3",
                  },
                  {
                    type: "Refrigerator",
                    units: 1,
                    kWh: 13,
                    icon: <KitchenOutlined />,
                    id: "c5c7658e-2da9-4f5f-8c2f-d01fc6da91c5",
                  },
                  {
                    type: "Wifi",
                    units: 1,
                    kWh: 10,
                    icon: <WifiOutlined />,
                    id: "a02c699e-b7ec-4a2e-9edd-7f676b7197f0",
                  },
                  {
                    type: "Smart Lamp",
                    units: 18,
                    kWh: 25,
                    icon: <LightbulbOutlined />,
                    id: "096a7495-7125-d4f99-b965-f27d7b94cd53",
                  },
                ].map((item) => (
                  <Card
                    sx={{ flexDirection: "row" }}
                    key={item.key}
                    className="items-start justify-between"
                  >
                    <div className="grid gap-3">
                      <Chip
                        sx={{ borderRadius: 5 }}
                        className="aspect-square h-10 grid place-items-center"
                        variant="soft"
                      >
                        {item.icon}
                      </Chip>
                      <Typography level="title-sm" className="text-gray-600">
                        {item.type}
                      </Typography>
                      <Typography level="body-sm">Active for 12hrs</Typography>
                    </div>
                    <div>
                      <Switch variant="solid"></Switch>
                    </div>
                  </Card>
                ))}
              </Box>
            </div>
          </Card>
        </Box>
        <Box
          className={`flex-1 flex flex-col gap-4 ${
            isXsScreen ? "col-span-12" : "col-span-4"
          }`}
        >
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Power Consumption </Typography>
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
                    data: ["Mon", "Thu", "Wed", "Thu", "Fri", "Sat", "Sun"],
                  },
                ]}
                series={[{ data: [10, 7, 5, 5, 3, 5, 1] }]}
                height={400}
              />
              <Typography level="h4">Device Power Consumption</Typography>
              <Box sx={{ marginTop: 2 }}>
                {[
                  {
                    type: "Smart TV",
                    units: 2,
                    kWh: 42,
                    icon: <TvOutlined />,
                    id: "fdf74db9-9d5a-4034-8100-2189f97d4ff9",
                  },
                  {
                    type: "Air Conditioner",
                    units: 2,
                    kWh: 87,
                    icon: <AcUnit />,
                    id: "bc9a41a9-5964-4ba6-9a54-bbb1876b88a5",
                  },
                  {
                    type: "Smart Lamp",
                    units: 18,
                    kWh: 25,
                    icon: <LightbulbOutlined />,
                    id: "096a7495-7125-4f99-b965-f27d7b94cd53",
                  },
                  {
                    type: "Smart Fans",
                    units: 11,
                    kWh: 37,
                    icon: <Loop />,
                    id: "bb58eb75-d8e6-4343-a258-672beef0b006",
                  },
                  {
                    type: "Speaker",
                    units: 5,
                    kWh: 58,
                    icon: <SpeakerGroupOutlined />,
                    id: "cd643fc6-dc7c-44ae-a116-8173de553b0f",
                  },
                  {
                    type: "CCTV",
                    units: 9,
                    kWh: 63,
                    icon: <VideocamOutlined />,
                    id: "7576c80d-63c5-462e-ae3f-fee1348e18c3",
                  },
                  {
                    type: "Refrigerator",
                    units: 1,
                    kWh: 13,
                    icon: <KitchenOutlined />,
                    id: "c5c7658e-2da9-4f5f-8c2f-d01fc6da91c5",
                  },
                  {
                    type: "Wifi",
                    units: 1,
                    kWh: 10,
                    icon: <WifiOutlined />,
                    id: "a02c699e-b7ec-4a2e-9edd-7f676b7197f0",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between mb-3"
                  >
                    <div className=" flex items-center justify-start gap-3">
                      <Chip
                        sx={{ borderRadius: 5 }}
                        className="aspect-square h-10 grid place-items-center"
                        variant="soft"
                      >
                        {item.icon}
                      </Chip>
                      <div>
                        <Typography level="title-md" className="text-gray-600">
                          {item.type}
                        </Typography>
                        <Typography level="body-sm" className="text-gray-900">
                          {item.units} Units
                        </Typography>
                      </div>
                    </div>
                    <Typography level="body-sm">{item.kWh}kWh</Typography>
                  </div>
                ))}
              </Box>
            </div>
          </Card>
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Thermostat</Typography>
            </div>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default SmartHome;
