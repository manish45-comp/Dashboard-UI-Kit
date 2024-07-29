import {
  CheckBoxOutlined,
  FireTruck,
  LocalShipping,
} from "@mui/icons-material";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import { Box, Card, Chip, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";

const Logistics = () => {
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
      <Typography level="h1">Logistics</Typography>

      <Box
        sx={{ marginTop: 3 }}
        className={`gap-4 grid ${isXsScreen ? "grid-cols-1" : "grid-cols-12"} `}
      >
        <Box
          className={`grid gap-4 col-span-3 ${
            isXsScreen ? "col-span-12" : "col-span-3"
          }`}
        >
          <Card>
            <div className="flex items-center justify-start gap-5">
              <Chip
                sx={{ borderRadius: 99999, aspectRatio: 1 }}
                size="lg"
                variant="soft"
                color="success"
              >
                <CachedOutlinedIcon color="success" />
              </Chip>
              <div className="mt-1 flex flex-col items-center justify-start">
                <Typography level="body-md">Ongoing</Typography>
                <Typography level="h1">280</Typography>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-start gap-5">
              <Chip
                sx={{ borderRadius: 99999, aspectRatio: 1 }}
                size="lg"
                variant="soft"
                color="warning"
              >
                <LocalShipping color="warning" />
              </Chip>
              <div className="mt-1 flex flex-col items-center justify-start">
                <Typography level="body-md">Shipping</Typography>
                <Typography level="h1">56</Typography>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center justify-start gap-5">
              <Chip
                sx={{ borderRadius: 99999, aspectRatio: 1 }}
                size="lg"
                variant="soft"
                color="success"
              >
                <CheckBoxOutlined />
              </Chip>
              <div className="mt-1 flex flex-col items-center justify-start">
                <Typography level="body-md">Delivered</Typography>
                <Typography level="h1">300</Typography>
              </div>
            </div>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-9"}>
          <Card>
            <Typography level="h4">Shipping</Typography>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`gap-4 grid ${isXsScreen ? "grid-cols-1" : "grid-cols-12"} `}
      >
        <Box
          className={`grid gap-4  ${isXsScreen ? "col-span-12" : "col-span-8"}`}
        >
          <Card>
            <Typography level="h4">Income Summary</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <Card>
            <Typography level="h4">Top Drivers</Typography>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`gap-4 grid ${isXsScreen ? "grid-cols-1" : "grid-cols-12"} `}
      >
        <Box
          className={`grid gap-4  ${isXsScreen ? "col-span-12" : "col-span-4"}`}
        >
          <Card>
            <Typography level="h4">Types of Vehicle</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <Card>
            <Typography level="h4">Top Countries</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <div className={`flex ${isXsScreen ? "" : "flex-col"}  gap-4`}>
            <Card className="flex-1">
              <Typography level="h4">Vehicle Status</Typography>
            </Card>
            <Card className="flex-1">
              <Typography level="h4">Orders Status</Typography>
            </Card>
          </div>
        </Box>
      </Box>

      <Card className="mt-4">
        <Typography level="h4">Orders Status</Typography>
      </Card>
    </Box>
  );
};

export default Logistics;
