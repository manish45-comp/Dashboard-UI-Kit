import { InfoOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  Input,
  Typography,
} from "@mui/joy";
import MUILink from "@mui/material/Link";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LoginForm = ({
  onSubmit,
  remember,
  handleCheckboxChange,
  errors,
  register,
}) => {
  const isLoading = useSelector((state) => state.auth.loading);

  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 grid gap-6">
        <FormControl error={errors.username && true}>
          <Input
            name="username"
            {...register("username", {
              required: "Username is required",
            })}
            placeholder="Email"
            error={errors.username && true}
            type="text"
          ></Input>
          {errors.username && (
            <FormHelperText className="flex items-center justify-start">
              <InfoOutlined />
              {errors.username ? errors.username.message : ""}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={errors.password && true}>
          <Input
            name="password"
            {...register("password", {
              required: "Password is required",
            })}
            placeholder="Password"
            error={errors.password && true}
            type="password"
          ></Input>
          {errors.password && (
            <FormHelperText className="flex items-center justify-start">
              <InfoOutlined />
              {errors.password ? errors.password.message : ""}
            </FormHelperText>
          )}
        </FormControl>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <MUILink component="p">
          <Link to={"/forgot-password"}>Forgot Password?</Link>
        </MUILink>
        <Checkbox
          checked={remember}
          onChange={handleCheckboxChange}
          size="lg"
          label={<Typography level="body-lg">Remember Me</Typography>}
          variant="soft"
        />
      </div>
      <div className="mt-5">
        <Button loading={isLoading} type="submit" color="primary" fullWidth>
          Log In
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
