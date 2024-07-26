import {
  Box,
  Button,
  Checkbox,
  Divider,
  Input,
  Typography,
  Select,
  Option,
} from "@mui/joy";
import { Facebook, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import GoogleIco from "../../components/icons/GoogleIco";
import MUILink from "@mui/joy/Link";

const Register = () => {
  return (
    <Box
      sx={{ padding: { xs: 0, lg: 3 } }}
      className="flex h-screen w-screen bg-black"
    >
      <Box
        className="flex-1 h-auto bg-white flex items-center justify-center hideScrollbar"
        sx={{
          overflowY: "scroll",
          borderRadius: { xs: 5, lg: 15 },
        }}
      >
        <Box
          sx={{ marginTop: 20, marginBottom: 10 }}
          className="p-2 w-[400px] grid gap-5"
        >
          <div className="logo flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="176"
              height="40"
              fill="none"
              viewBox="0 0 176 40"
            >
              <path
                fill="#000"
                fillRule="evenodd"
                d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
                clipRule="evenodd"
              ></path>
              <path
                fill="#000"
                d="M176 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
              ></path>
            </svg>
          </div>
          <div className="text-center">
            <Typography level="h1">Welcome Back</Typography>
          </div>
          <div className="socials grid gap-3">
            <Button variant="outlined" endDecorator={<GoogleIco />}>
              Continue With Google
            </Button>
            <Button variant="outlined" endDecorator={<Facebook />}>
              Continue With Facebook
            </Button>
          </div>
          <div className="">
            <Divider variant="middle" />
          </div>
          <div className="grid gap-6">
            <Input placeholder="First Name"></Input>
            <Input placeholder="Last Name"></Input>
            <Input placeholder="Email"></Input>
            <Input placeholder="Mobile Number"></Input>
            <Input placeholder="Address"></Input>
            <Select placeholder="Gender">
              <Option value={1}>Male</Option>
              <Option value={2}>Female</Option>
            </Select>
            <Input
              placeholder="Password"
              endDecorator={<RemoveRedEyeOutlined />}
            ></Input>
            <Input placeholder="Confirm Password"></Input>
          </div>
          <div className="flex items-center justify-start gap-1">
            <Checkbox size="lg" variant="soft" />
            <Typography level="title-md">I have read the</Typography>
            <MUILink component="p">
              <Link to="/">terms & conditions</Link>
            </MUILink>
          </div>
          <div className="">
            <Button color="primary" fullWidth>
              Register Now
            </Button>
          </div>
          <div className=" flex gap-1 items-center justify-center">
            <Typography level="title-md">Already have an account?</Typography>
            <MUILink component="p">
              <Link to={"/"}>Log in</Link>
            </MUILink>
          </div>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }} className="flex-1">
        2
      </Box>
    </Box>
  );
};

export default Register;
