import { Box, Button, Checkbox, Divider, Input, Typography } from "@mui/joy";
import MUILink from "@mui/joy/Link";
import { Facebook } from "@mui/icons-material";
import GoogleIco from "../../components/icons/GoogleIco";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{ padding: { xs: 0, lg: 3 } }}
      className="flex h-screen w-screen bg-black"
    >
      <Box
        sx={{ overflow: "hidden", borderRadius: { xs: 5, lg: 15 } }}
        className="flex-1 border bg-white flex items-center justify-center"
      >
        <Box className="w-[400px] p-2">
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
          <div className="text-center my-10">
            <Typography level="h1">Welcome Back</Typography>
          </div>
          <div className="socials grid gap-3 mt-5">
            <Button variant="outlined" endDecorator={<GoogleIco />}>
              Continue With Google
            </Button>
            <Button variant="outlined" endDecorator={<Facebook />}>
              Continue With Facebook
            </Button>
          </div>
          <div className="mt-10">
            <Divider variant="middle" />
          </div>
          <form>
            <div className="mt-10 grid gap-6">
              <Input placeholder="Email"></Input>
              <Input placeholder="Password"></Input>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <MUILink component="p">
                <Link to={"/forgot-password"}>Forgot Password?</Link>
              </MUILink>
              <Checkbox
                size="lg"
                label={<Typography level="body-lg">Remember Me</Typography>}
                variant="soft"
              />
            </div>
            <div className="mt-5">
              <Button color="primary" fullWidth>
                Log In
              </Button>
            </div>
          </form>
          <div className="mt-5 flex gap-1 items-center justify-center">
            <Typography level="title-md">
              Don&apos;t have an account?
            </Typography>
            <MUILink component="p">
              <Link to={"/register"}>Sign up</Link>
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

export default Login;
