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
  Textarea,
  Typography,
} from "@mui/joy";
import { Link } from "react-router-dom";
import MUILink from "@mui/material/Link";
import { InfoOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useState } from "react";
import EyeIcon from "./icons/EyeIcon";
import InputFileUpload from "./InputFileUpload";

const RegistrationForm = ({ onSubmit, errors, register }) => {
  const isLoading = useSelector((state) => state.auth.loading);

  const [show, setShow] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const togglePasswordVisibility = (value) => {
    setShow((prev) => ({ ...prev, [value]: !prev[value] }));
  };

  return (
    <form onSubmit={onSubmit} className=" grid gap-6">
      <div className="grid grid-cols-2 gap-2 w-full overflow-hidden">
        <div className="flex-1">
          <FormControl error={errors.first_name && true}>
            <Input
              name="first_name"
              {...register("first_name", {
                required: "firstName is required",
              })}
              placeholder="First Name"
              error={errors.first_name && true}
              type="text"
            ></Input>
            {errors.first_name && (
              <FormHelperText className="flex items-center justify-start">
                <InfoOutlined />
                {errors.first_name ? errors.first_name.message : ""}
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="flex-1">
          <FormControl error={errors.last_name && true}>
            <Input
              name="last_name"
              {...register("last_name", {
                required: "last Name is required",
              })}
              placeholder="Last Name"
              error={errors.last_name && true}
              type="text"
            ></Input>
            {errors.last_name && (
              <FormHelperText className="flex items-center justify-start">
                <InfoOutlined />
                {errors.last_name ? errors.last_name.message : ""}
              </FormHelperText>
            )}
          </FormControl>
        </div>
      </div>

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
          <Option value={1}>Male</Option>
          <Option value={2}>Female</Option>
        </Select>
        {errors.gender && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.gender ? errors.gender.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.email && true}>
        <Input
          name="email"
          {...register("email", {
            required: "Email is required",
          })}
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

      <FormControl error={errors.mobileno && true}>
        <Input
          name="mobileno"
          {...register("mobileno", {
            required: "Mobile Number is required",
          })}
          placeholder="Mobile Number"
          error={errors.mobileno && true}
          type="text"
        ></Input>
        {errors.mobileno && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.mobileno ? errors.mobileno.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.address && true}>
        <Textarea
          minRows={2}
          name="address"
          {...register("address", {
            required: "Address is required",
          })}
          placeholder="Address"
          error={errors.address && true}
          type="text"
        ></Textarea>
        {errors.address && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.address ? errors.address.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <InputFileUpload />

      <FormControl error={errors.password && true}>
        <Input
          name="password"
          {...register("password", {
            required: "Password is required",
          })}
          placeholder="Password"
          error={errors.password && true}
          type={show.showPassword ? "text" : "password"}
          endDecorator={
            <IconButton
              size="sm"
              variant="soft"
              color="primary"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
              onClick={() => togglePasswordVisibility("showPassword")}
            >
              <EyeIcon show={show.showPassword} className="size-5" />
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
      <FormControl error={errors.confirm_password && true}>
        <Input
          name="confirm_password"
          {...register("confirm_password", {
            required: "Confirm Password is required",
          })}
          placeholder="Confirm Password"
          error={errors.confirm_password && true}
          type={show.showConfirmPassword ? "text" : "password"}
          endDecorator={
            <IconButton
              size="sm"
              variant="soft"
              color="primary"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
              onClick={() => togglePasswordVisibility("showConfirmPassword")}
            >
              <EyeIcon show={show.showConfirmPassword} className="size-5" />
            </IconButton>
          }
        ></Input>
        {errors.confirm_password && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined />
            {errors.confirm_password ? errors.confirm_password.message : ""}
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
