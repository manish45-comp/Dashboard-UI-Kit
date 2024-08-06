/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/joy";
import { Link, useNavigate } from "react-router-dom";

import MUILink from "@mui/joy/Link";
import SocialButtons from "../../components/icons/SocialButtons";
import { useForm } from "react-hook-form";
import RegistrationForm from "../../components/RegistrationForm";
import { Divider } from "@mui/material";
import Logo from "../../components/icons/Logo";
import { registerUser } from "../../redux/store/authSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import placeImage from "../../assets/form-placeholder.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // react hook form's hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { termsAndConditions, ...filtered } = data;
    try {
      const response = await dispatch(registerUser(filtered));
      if (response.error) {
        toast.error(response.payload || "Registration failed");
      }
      reset();
      navigate("/");
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <Box
      sx={{ padding: { xs: 0, lg: 3 } }}
      className="flex h-auto min-h-screen w-screen bg-white"
    >
      <Box
        className="flex-1 h-auto bg-white flex items-center justify-center hideScrollbar"
        sx={{
          overflowY: "scroll",
          borderRadius: { xs: 5, lg: 15 },
        }}
      >
        <Box
          sx={{ marginTop: 5, marginBottom: 5 }}
          className="p-2 w-[400px] grid gap-5"
        >
          <Logo />
          <div className="text-center">
            <Typography level="h1">Welcome Back</Typography>
          </div>
          <SocialButtons />
          <div className="flex gap-2 items-center justify-center">
            <Divider className="flex-1" />
            <Typography level="body-sm">or</Typography>
            <Divider className="flex-1" />
          </div>

          <RegistrationForm
            onSubmit={handleSubmit(onSubmit)}
            errors={errors}
            register={register}
          />

          <div className=" flex gap-1 items-center justify-center">
            <Typography level="title-md">Already have an account?</Typography>
            <MUILink component="p">
              <Link to={"/"}>Log in</Link>
            </MUILink>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          borderRadius: 10,
          display: { xs: "none", lg: "block" },
        }}
        className="flex-1"
      >
        <img
          className="h-full w-full"
          style={{ objectFit: "cover" }}
          src={placeImage}
        />
      </Box>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Box>
  );
};

export default Register;
