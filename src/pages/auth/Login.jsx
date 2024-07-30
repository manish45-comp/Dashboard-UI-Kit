import { Box, Typography } from "@mui/joy";
import MUILink from "@mui/joy/Link";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../redux/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadUserCredentials, rememberUserCredentials } from "../../utils/auth";
import Logo from "../../components/icons/Logo";
import SocialButtons from "../../components/icons/SocialButtons";
import LoginForm from "../../components/LoginForm";
import toast, { Toaster } from "react-hot-toast";
import { Divider } from "@mui/material";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [remember, setRemember] = useState(false);

  const notifications = useSelector((state) => state.auth.notifications);

  useEffect(() => {
    if (notifications) {
      toast.success(notifications, 2000);
    }
  }, [notifications]);

  // react hook form's hook
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  useEffect(() => {
    setRemember(localStorage.getItem("rememberMe") === "true");
    loadUserCredentials(setValue);
  }, [setValue]);

  const handleCheckboxChange = () => {
    setRemember(!remember);
  };

  const onSubmit = async (credentials) => {
    rememberUserCredentials(remember, credentials);
    try {
      const response = await dispatch(loginUser(credentials));
      if (response.error) {
        toast.error(response.payload || "Login failed");
      }
      reset();
      navigate("/dashboard");
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

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
          <Logo />
          <div className="text-center my-10">
            <Typography level="h1">Welcome Back</Typography>
          </div>
          <SocialButtons />

          <div className="flex gap-2 items-center justify-center mt-10">
            <Divider className="flex-1" />
            <Typography level="body-sm">or</Typography>
            <Divider className="flex-1" />
          </div>

          <LoginForm
            onSubmit={handleSubmit(onSubmit)}
            remember={remember}
            handleCheckboxChange={handleCheckboxChange}
            errors={errors}
            register={register}
          />

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
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};

export default Login;
