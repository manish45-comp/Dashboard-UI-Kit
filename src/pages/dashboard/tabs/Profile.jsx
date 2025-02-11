import { CloudUpload } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <Box className="flex items-center justify-start gap-3 mt-5">
        <Box
          sx={{
            width: 120,
            aspectRatio: 1,
            borderRadius: 99999999,
            overflow: "hidden",
            position: "relative",
          }}
          className="profileUpload"
        >
          <img src={user?.profile_image} />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center uploadIcon">
            <CloudUpload sx={{ color: "#f7f7f7" }} />
          </div>
        </Box>
        <div>
          <Typography level="h4">Profile Picture</Typography>
          <Typography level="body-sm">
            Supports PNGs, JPEGs and GIFs under 3MB
          </Typography>
        </div>
      </Box>
      <Divider sx={{ marginBlock: 4 }} />

      {/* basic details */}
      <Box>
        <Typography level="h4">Basic Details</Typography>
        <Box
          sx={{
            marginTop: 3,
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "100%", lg: "80%" },
          }}
        >
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="First Name" value={user?.first_name}></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Last Name" value={user?.last_name}></Input>
          </FormControl>
          <FormControl className="flex-1">
            <FormLabel>Email Address</FormLabel>
            <Input placeholder="Last Name" value={user?.email}></Input>
          </FormControl>
          <FormControl sx={{ gridColumnStart: 1 }}>
            <FormLabel>Bio</FormLabel>
            <Textarea
              minRows={3}
              placeholder="Last Name"
              value="Hi there! I'm Rene, a seasoned developer with a heart that belongs to both the digital realm and the breathtaking mountains. Let's connect and code the future together!"
            ></Textarea>
          </FormControl>
          <FormControl sx={{ gridColumnStart: 1 }}>
            <FormLabel>Website</FormLabel>
            <Input
              startDecorator={<Chip>www.</Chip>}
              placeholder="Last Name"
              value={user?.email}
            ></Input>
          </FormControl>
        </Box>
      </Box>
      <Divider sx={{ marginBlock: 5 }} />

      {/* location details */}
      <Box>
        <Typography level="h4">Location</Typography>
        <Box
          sx={{
            marginTop: 3,
            display: "grid",
            gap: 3,
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            flexDirection: { xs: "column", lg: "row" },
            width: { xs: "100%", lg: "80%" },
          }}
        >
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Country" defaultValue={user?.address?.country}>
              <Option value="United States">United States</Option>
              <Option value="India">India</Option>
              <Option value="Canada">Canada</Option>
              <Option value="United Kingdom">United Kingdom</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>State</FormLabel>
            <Input placeholder="State" value={user?.address?.state}></Input>
          </FormControl>
          <FormControl className="flex-1">
            <FormLabel>City</FormLabel>
            <Input placeholder="City" value={user?.address?.city}></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Zip Code</FormLabel>
            <Input
              placeholder="Zip Code"
              value={user?.address?.postalCode}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea
              minRows={2}
              placeholder="Address"
              value={user?.address}
            ></Textarea>
          </FormControl>
        </Box>
      </Box>

      <Divider sx={{ marginBlock: 5 }} />
      <Box className="flex items-center justify-end gap-3">
        <Button color="neutral" variant="outlined">
          Discard
        </Button>
        <Button color="primary">Save Changes</Button>
      </Box>
    </>
  );
};

export default Profile;
