import { Circle, Computer, PhoneAndroid } from "@mui/icons-material";
import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Chip,
} from "@mui/joy";
import { useSelector } from "react-redux";

const Security = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Box sx={{ marginTop: 3 }}>
        <Typography level="h4">Change Password</Typography>
      </Box>
      <Box
        sx={{
          marginTop: 3,
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
        }}
      >
        <FormControl>
          <FormLabel>Current Password</FormLabel>
          <Input></Input>
        </FormControl>
        <FormControl sx={{ gridColumnStart: 1 }}>
          <FormLabel>New Password</FormLabel>
          <Input></Input>
        </FormControl>
        <FormControl sx={{ gridColumnStart: 1 }}>
          <FormLabel>Confirm New Password</FormLabel>
          <Input></Input>
        </FormControl>
      </Box>
      <Box
        sx={{ marginTop: 4 }}
        className="flex items-center justify-end gap-3"
      >
        <Button color="neutral" variant="outlined">
          Discard
        </Button>
        <Button color="primary">Save Changes</Button>
      </Box>
      <Divider sx={{ marginBlock: 5 }} />
      <Box sx={{ marginTop: 3 }}>
        <Typography level="h4">Login history</Typography>
        <Typography level="body-sm">Your recent login activity</Typography>
        <Box sx={{ marginTop: 3 }}>
          <div className="flex items-start justify-start gap-5 p-2 py-3">
            <Computer />
            <div>
              <Typography level="title-sm">{user?.userAgent}</Typography>
              <Chip
                size="sm"
                startDecorator={
                  <Circle
                    sx={{
                      width: 10,
                      color: "#1F7A1F",
                    }}
                  />
                }
              >
                Active now
              </Chip>
            </div>
          </div>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <div className="flex items-start justify-start gap-5 p-2 py-3">
            <PhoneAndroid />
            <div>
              <Typography level="title-md">
                Chrome,Android OS 116.0.5845.51
              </Typography>
              <Typography level="body-md">
                India, Pune • 24 Jul at 3:41 AM
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Security;
