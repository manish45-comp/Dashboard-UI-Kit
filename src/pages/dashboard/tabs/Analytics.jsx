import { Box, Card, Chip, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Facebook,
  Google,
  LinkedIn,
  SouthEastOutlined,
  Twitter,
} from "@mui/icons-material";
import NorthEastOutlinedIcon from "@mui/icons-material/NorthEastOutlined";

const Analytics = () => {
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
      <Typography level="h1">Analytics</Typography>
      <Card className="mt-4">
        <div className="flex item">
          <div className="grid gap-3">
            <Typography>Page View</Typography>
            <Typography level="h2">1,019,084</Typography>
            <Chip
              startDecorator={<NorthEastOutlinedIcon />}
              variant="soft"
              color="success"
            >
              13%
            </Chip>
          </div>
          <div className="grid gap-3">
            <Typography>Sessions</Typography>
            <Typography level="h2">591,008</Typography>
            <Chip
              startDecorator={<NorthEastOutlinedIcon />}
              variant="soft"
              color="success"
            >
              5%
            </Chip>
          </div>
          <div className="grid gap-3">
            <Typography>Bounce Rate</Typography>
            <Typography level="h2">13.5% </Typography>
            <Chip
              startDecorator={<NorthEastOutlinedIcon />}
              variant="soft"
              color="success"
            >
              5.7%
            </Chip>
          </div>
          <div className="grid gap-3">
            <Typography>Session Duration</Typography>
            <Typography level="h2">13m 40s </Typography>
            <Chip
              startDecorator={<SouthEastOutlined />}
              variant="soft"
              color="danger"
            >
              5.7%
            </Chip>
          </div>
        </div>
      </Card>
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
                {/* <CachedOutlinedIcon color="success" /> */}
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
                {/* <LocalShipping color="warning" /> */}
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
                {/* <CheckBoxOutlined /> */}
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
          className={`grid gap-4  ${isXsScreen ? "col-span-12" : "col-span-4"}`}
        >
          <Card>
            <Typography level="h4">Traffic Source</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <Card>
            <Typography level="h4">Recent Events</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <Card className="flex-1">
            <Typography level="h4">Insights</Typography>
          </Card>
        </Box>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`gap-4 grid ${isXsScreen ? "grid-cols-1" : "grid-cols-12"} `}
      >
        <Box
          className={`grid gap-4  ${isXsScreen ? "col-span-12" : "col-span-7"}`}
        >
          <Card>
            <Typography level="h4">Session Duration</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-5"}>
          <Card>
            <Typography level="h4">Audience</Typography>
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
            <Typography level="h4">Visits by Time</Typography>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-4"}>
          <Card>
            <Typography level="h4">Weekly Visitors</Typography>
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
            <Typography level="h4">Traffic by Source</Typography>
            <div className="aspect-video grid grid-cols-2 gap-4">
              <Card>
                <Google />
                <Typography level="h2">10k</Typography>
                <Typography level="body-sm">Google</Typography>
              </Card>
              <Card>
                <Facebook />
                <Typography level="h2">4.5k</Typography>
                <Typography level="body-sm">Facebook</Typography>
              </Card>
              <Card>
                <Twitter />
                <Typography level="h2">6.9k</Typography>
                <Typography level="body-sm">Twitter</Typography>
              </Card>
              <Card>
                <LinkedIn />
                <Typography level="h2">3k</Typography>
                <Typography level="body-sm">LinkedIn</Typography>
              </Card>
            </div>
          </Card>
        </Box>
        <Box className={isXsScreen ? "col-span-12" : "col-span-8"}>
          <Card>
            <Typography level="h4">Most Visited Pages</Typography>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Analytics;
