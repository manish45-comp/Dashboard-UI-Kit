import { Add, ArrowOutward, Draw, IosShare, Print } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Table,
  Typography,
} from "@mui/joy";

const Billing = () => {
  return (
    <>
      <Box sx={{ marginTop: 3 }}>
        <Typography level="h4">Billing Information</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          marginTop: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            borderRight: { xs: 0, sm: 1, lg: 1 },
            borderBottom: { xs: 1, sm: 0, lg: 0 },
            borderRightColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
            borderBottomColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
          }}
          className="grid gap-4 p-2 px-5"
        >
          <Typography level="body-md">Start Date</Typography>
          <Typography level="h4">Mar 26, 2024</Typography>
        </Box>
        <Box
          sx={{
            borderRight: { xs: 0, lg: 1 },
            borderBottom: { xs: 1, sm: 0, lg: 0 },
            borderRightColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
            borderBottomColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
          }}
          className="grid gap-4 p-2 px-5"
        >
          <Typography level="body-md">Next Payment</Typography>
          <Typography level="h4">Aug 26, 2024</Typography>
        </Box>
        <Box
          sx={{
            borderRight: { xs: 0, sm: 1, lg: 1 },
            borderBottom: { xs: 1, sm: 0, lg: 0 },
            borderRightColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
            borderBottomColor: {
              xs: "#cbd5e1",
              sm: "#cbd5e1",
              lg: "#cbd5e1",
            },
          }}
          className="grid gap-4 p-2 px-5"
        >
          <Typography level="body-md">Plan</Typography>
          <div className="flex items-center justify-between">
            <Typography level="h4">Starter</Typography>
            <Chip
              size="sm"
              color="success"
              variant="soft"
              startDecorator={<ArrowOutward />}
            >
              Manage
            </Chip>
          </div>
        </Box>
        <Box className="grid gap-4 p-2 px-5">
          <Typography level="body-md">Upcoming invoice</Typography>
          <Typography level="h4">$99.00</Typography>
        </Box>
      </Box>
      <Divider sx={{ marginBlock: 4 }} />
      <Box sx={{ marginTop: 3 }}>
        <Typography level="h4">Payment Method</Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2 , 1fr)",
            lg: "repeat(3 , 1fr)",
          },
          gap: 3,
          marginTop: 4,
        }}
      >
        <Card sx={{ minHeight: 120 }}>
          <CardContent orientation="horizontal">
            <div className="h-9 overflow-hidden w-16 border border-slate-300 rounded-md flex items-center justify-center p-1">
              <img src="https://static-00.iconduck.com/assets.00/visa-icon-512x157-gku8mwfq.png" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <Typography level="title-md">•••• •••• •••• 5783</Typography>
              <Typography level="body-sm">Expiry 12/2026</Typography>
              <Chip variant="soft" color="warning">
                Primary
              </Chip>
            </div>
            <div className="flex items-end">
              <IconButton>
                <Draw />
              </IconButton>
            </div>
          </CardContent>
        </Card>
        <Card sx={{ minHeight: 120 }}>
          <CardContent orientation="horizontal">
            <div className="h-9 overflow-hidden w-16 border border-slate-300 rounded-md flex items-center justify-center p-1">
              <img src="https://static-00.iconduck.com/assets.00/visa-icon-512x157-gku8mwfq.png" />
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <Typography level="title-md">•••• •••• •••• 3488</Typography>
              <Typography level="body-sm">Expiry 06/2036</Typography>
            </div>
            <div className="flex items-end">
              <IconButton>
                <Draw />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Button startDecorator={<Add />} color="neutral" variant="outlined">
          Add Payment Method
        </Button>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h4">Billing History</Typography>
        <Button
          startDecorator={<IosShare />}
          color="neutral"
          variant="outlined"
        >
          Export
        </Button>
      </Box>

      <Box sx={{ marginTop: 3 }}>
        <Table
          sx={{
            border: "1px solid #cbd5e1",
            borderRadius: 13,
            overflow: "hidden",
          }}
          aria-label="basic table"
          borderAxis="none"
        >
          <thead>
            <tr>
              <th className="border-b border-b-slate-400">Invoice ID</th>
              <th className="border-b border-b-slate-400">Description</th>
              <th className="border-b border-b-slate-400">Billing Date</th>
              <th className="border-b border-b-slate-400">Amount</th>
              <th className="border-b border-b-slate-400">Status</th>
              <th className="border-b border-b-slate-400"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Typography level="title-md" color="primary">
                  INV-005
                </Typography>
              </td>
              <td>Starter Plan</td>
              <td>Jul 26, 2024</td>
              <td> $99.00</td>
              <td>
                <Chip size="sm" variant="soft" color="warning">
                  Pending
                </Chip>
              </td>
              <td className="text-end">
                <IconButton>
                  <Print />
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <Typography level="title-md" color="primary">
                  INV-004
                </Typography>
              </td>
              <td>Starter Plan</td>
              <td>Jul 26, 2024</td>
              <td> $99.00</td>
              <td>
                <Chip size="sm" variant="soft" color="danger">
                  Cancel
                </Chip>
              </td>
              <td className="text-end">
                <IconButton>
                  <Print />
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <Typography level="title-md" color="primary">
                  INV-003
                </Typography>
              </td>
              <td>Starter Plan</td>
              <td>Jul 26, 2024</td>
              <td> $99.00</td>
              <td>
                <Chip size="sm" variant="soft" color="success">
                  Paid
                </Chip>
              </td>
              <td className="text-end">
                <IconButton>
                  <Print />
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <Typography level="title-md" color="primary">
                  INV-002
                </Typography>
              </td>
              <td>Starter Plan</td>
              <td>Jul 26, 2024</td>
              <td> $99.00</td>
              <td>
                <Chip size="sm" variant="soft" color="success">
                  Paid
                </Chip>
              </td>
              <td className="text-end">
                <IconButton>
                  <Print />
                </IconButton>
              </td>
            </tr>
            <tr>
              <td>
                <Typography level="title-md" color="primary">
                  INV-001
                </Typography>
              </td>
              <td>Basic Plan</td>
              <td>Jul 26, 2024</td>
              <td> $99.00</td>
              <td>
                <Chip size="sm" variant="soft" color="success">
                  Paid
                </Chip>
              </td>
              <td className="text-end">
                <IconButton>
                  <Print />
                </IconButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </Box>
    </>
  );
};

export default Billing;
