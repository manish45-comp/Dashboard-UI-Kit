import { Box, Card, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";

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
      <Typography level="h1">Smart Home</Typography>

      <Box
        sx={{ marginTop: 3 }}
        className={`${isXsScreen ? "flex-col" : ""} flex gap-4`}
      >
        <Box className="flex-1 flex flex-col gap-4">
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Today&apos;s Power Usage</Typography>
            </div>
          </Card>
          <div className={`flex ${isXsScreen ? "flex-col" : ""} gap-4`}>
            <Card className="flex-1">
              <div className="mt-1 grid gap-2">
                <Typography level="h4">Consumption By Room</Typography>
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
            </div>
          </Card>
        </Box>
        <Box className="flex-1 flex flex-col gap-4">
          <Card>
            <div className="mt-1 grid gap-2">
              <Typography level="h4">Power Consumption </Typography>
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
