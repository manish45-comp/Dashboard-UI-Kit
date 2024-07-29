import {
  CurrencyBitcoin,
  SwapHoriz,
  TrendingDown,
  TrendingUp,
} from "@mui/icons-material";
import { Box, Button, Card, Chip, Typography } from "@mui/joy";
import { useMediaQuery, useTheme } from "@mui/material";

const Crypto = () => {
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
      <Typography level="h1">Crypto</Typography>
      <Box sx={{ marginTop: 3 }} className="flex items-center justify-between">
        <Typography level="h4">My Wallets</Typography>
        <Button
          startDecorator={<SwapHoriz />}
          variant="outlined"
          color="neutral"
        >
          Swap Wallets
        </Button>
      </Box>

      <Box
        className="gap-4"
        sx={{
          marginTop: 3,
          display: "grid",
          gridTemplateColumns: {
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
        }}
      >
        <Card color="warning" variant="soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <CurrencyBitcoin />
              <Typography level="title-lg">BTC</Typography>
            </div>
            <Chip
              startDecorator={<TrendingUp />}
              variant="soft"
              color="success"
            >
              15%
            </Chip>
          </div>

          <div className="flex items-center justify-between">
            <Typography level="h2">0.221</Typography>
            <Typography>$6,693.29</Typography>
          </div>
        </Card>
        <Card color="primary" variant="soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <CurrencyBitcoin />
              <Typography level="title-lg">ETH</Typography>
            </div>
            <Chip
              startDecorator={<TrendingDown />}
              variant="soft"
              color="danger"
            >
              1.6%
            </Chip>
          </div>

          <div className="flex items-center justify-between">
            <Typography level="h2">0.221</Typography>
            <Typography>$6,693.29</Typography>
          </div>
        </Card>
        <Card color="danger" variant="soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <CurrencyBitcoin />
              <Typography level="title-lg">USTD</Typography>
            </div>
            <Chip
              startDecorator={<TrendingUp />}
              variant="soft"
              color="success"
            >
              1.35%
            </Chip>
          </div>

          <div className="flex items-center justify-between">
            <Typography level="h2">0.221</Typography>
            <Typography>$6,693.29</Typography>
          </div>
        </Card>
        <Card color="success" variant="soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <CurrencyBitcoin />
              <Typography level="title-lg">SOL</Typography>
            </div>
            <Chip
              startDecorator={<TrendingDown />}
              variant="soft"
              color="danger"
            >
              5.21%
            </Chip>
          </div>

          <div className="flex items-center justify-between">
            <Typography level="h2">0.221</Typography>
            <Typography>$6,693.29</Typography>
          </div>
        </Card>
      </Box>

      <Box
        sx={{ marginTop: 3 }}
        className={`grid gap-4 ${isXsScreen ? "grid-cols-1" : "grid-cols-12"}`}
      >
        <Box
          className={`grid gap-4 ${isXsScreen ? "col-span-12" : "col-span-8"} `}
        >
          <Card></Card>
          <Card></Card>
        </Box>
        <Box
          className={`grid gap-4 ${isXsScreen ? "col-span-12" : "col-span-4"} `}
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Box>
      </Box>
      <Box
        sx={{ marginTop: 3 }}
        className={`grid gap-4 ${isXsScreen ? "grid-cols-1" : "grid-cols-12"}`}
      >
        <Card className={isXsScreen ? "col-span-12" : "col-span-4"}></Card>
        <Card className={isXsScreen ? "col-span-12" : "col-span-8"}></Card>
      </Box>
    </Box>
  );
};

export default Crypto;
