import { Box, Typography } from "@mui/joy";

const Overview = () => {
  return (
    <Box
      sx={{
        borderBottomRightRadius: { xs: 0, lg: 15 },
        borderBottomLeftRadius: { xs: 0, lg: 15 },
        marginBottom: { xs: 0, lg: 3 },
      }}
      className="bg-white"
    >
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21,
      ].map((item, i) => (
        <Typography key={i} level="h1">
          {item} Overview
        </Typography>
      ))}
    </Box>
  );
};

export default Overview;
