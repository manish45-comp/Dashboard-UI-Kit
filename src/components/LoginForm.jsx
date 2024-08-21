import { InfoOutlined } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  Typography,
} from "@mui/joy";
import MUILink from "@mui/material/Link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EyeIcon from "./icons/EyeIcon";
import { emailValidation, passwordValidation } from "../utils/Validations";

/* eslint-disable react/prop-types */
const LoginForm = ({
  onSubmit,
  remember,
  handleCheckboxChange,
  errors,
  register,
}) => {
  const isLoading = useSelector((state) => state.auth.loading);
  const [show, setShow] = useState(false);
  return (
    <form onSubmit={onSubmit}>
      <div className="mt-10 grid gap-6">
        <FormControl error={errors.email && true}>
          <Input
            name="email"
            {...register("email", emailValidation)}
            placeholder="Email"
            error={errors.email && true}
            type="text"
          ></Input>
          {errors.email && (
            <FormHelperText className="flex items-center justify-start">
              <InfoOutlined />
              {errors.email ? errors.email.message : ""}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl error={errors.password && true}>
          <Input
            name="password"
            {...register("password", passwordValidation)}
            placeholder="Password"
            error={errors.password && true}
            type={show ? "text" : "password"}
            endDecorator={
              <IconButton
                onClick={() => setShow(!show)}
                size="sm"
                sx={{ aspectRatio: 1, borderRadius: 999999 }}
              >
                <EyeIcon className="size-4" show={show} />
              </IconButton>
            }
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
