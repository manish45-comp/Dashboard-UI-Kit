/* eslint-disable react/prop-types */
import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";
import MUILink from "@mui/material/Link";
import { InfoOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

const RegistrationForm = ({ onSubmit, errors, register }) => {
  const isLoading = useSelector((state) => state.auth.loading);

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <FormControl error={errors.firstName && true}>
        <Input
          name="firstName"
          {...register("firstName", {
            required: "firstName is required",
          })}
          placeholder="First Name"
          error={errors.firstName && true}
          type="text"
        ></Input>
        {errors.firstName && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.firstName ? errors.firstName.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.lastName && true}>
        <Input
          name="lastName"
          {...register("lastName", {
            required: "last Name is required",
          })}
          placeholder="Last Name"
          error={errors.lastName && true}
          type="text"
        ></Input>
        {errors.lastName && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.lastName ? errors.lastName.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.gender && true}>
        <Select
          id="select"
          name="gender"
          {...register("gender", {
            required: "Gender is required",
          })}
          placeholder="Gender"
          error={errors.gender && true}
        >
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>
        {errors.gender && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.gender ? errors.gender.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.username && true}>
        <Input
          name="username"
          {...register("username", {
            required: "Username is required",
          })}
          placeholder="Username"
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

      <FormControl error={errors.username && true}>
        <Input
          name="mobileNumber"
          {...register("mobileNumber", {
            required: "Mobile Number is required",
          })}
          placeholder="Mobile Number"
          error={errors.mobileNumber && true}
          type="text"
        ></Input>
        {errors.mobileNumber && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.mobileNumber ? errors.mobileNumber.message : ""}
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
          endDecorator={
            <IconButton
              size="sm"
              variant="soft"
              color="primary"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
            >
              <RemoveRedEyeOutlined />
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
      <FormControl error={errors.password && true}>
        <Input
          name="confirmPassword"
          {...register("confirmPassword", {
            required: "confirmPassword is required",
          })}
          placeholder="Confirm Password"
          error={errors.confirmPassword && true}
          type="password"
          endDecorator={
            <IconButton
              size="sm"
              variant="soft"
              color="primary"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
            >
              <RemoveRedEyeOutlined />
            </IconButton>
          }
        ></Input>
        {errors.confirmPassword && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.confirmPassword ? errors.confirmPassword.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.termsAndConditions && true}>
        {" "}
        <div className="flex items-center justify-start gap-1">
          <Checkbox
            name="termsAndConditions"
            {...register("termsAndConditions", {
              required: "Please accept terms and conditions.",
            })}
            size="lg"
            variant="soft"
          />
          <Typography level="title-md">I have read the</Typography>
          <MUILink component="p">
            <Link to="#">terms & conditions</Link>
          </MUILink>{" "}
        </div>
        {errors.termsAndConditions && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.termsAndConditions ? errors.termsAndConditions.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <Button loading={isLoading} type="submit" color="primary" fullWidth>
        Register Now
      </Button>
    </form>
  );
};

export default RegistrationForm;
