import { Box, Typography } from "@mui/joy";

const SmartHome = () => {
  return (
    <Box
      sx={{
        borderBottomRightRadius: { xs: 0, lg: 15 },
        borderBottomLeftRadius: { xs: 0, lg: 15 },
        marginBottom: { xs: 0, lg: 3 },
      }}
      className="bg-white"
    >
      {Array.from({ length: 21 }, (_, i) => (
        <Typography key={i} level="h1">
          {i + 1} Smart Home
        </Typography>
      ))}
    </Box>
  );
};

export default SmartHome;
