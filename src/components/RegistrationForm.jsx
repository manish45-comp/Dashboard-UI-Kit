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
import {
  confirmPasswordValidation,
  emailValidation,
  passwordValidation,
} from "../utils/Validations";

const RegistrationForm = ({ onSubmit, formState, register, watch }) => {
  const { errors, isValid } = formState;

  const password = watch("password");
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
                required: "first Name is required",
              })}
              placeholder="First Name"
              error={errors.first_name && true}
              type="text"
            ></Input>
            {errors.first_name && (
              <FormHelperText className="flex items-center justify-start">
                <InfoOutlined sx={{ fontSize: "15px" }} />
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
                <InfoOutlined sx={{ fontSize: "15px" }} />
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
          <Option value={"male"}>Male</Option>
          <Option value={"female"}>Female</Option>
        </Select>
        {errors.gender && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.gender ? errors.gender.message : ""}
          </FormHelperText>
        )}
      </FormControl>

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
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.email ? errors.email.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.mobile_number && true}>
        <Input
          name="mobile_number"
          {...register("mobile_number", {
            required: "Mobile Number is required",
          })}
          placeholder="Mobile Number"
          error={errors.mobile_number && true}
          type="text"
        ></Input>
        {errors.mobile_number && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.mobile_number ? errors.mobile_number.message : ""}
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
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.address ? errors.address.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <InputFileUpload />

      <FormControl error={errors.password && true}>
        <Input
          name="password"
          {...register("password", passwordValidation)}
          placeholder="Password"
          error={errors.password && true}
          type={show.showPassword ? "text" : "password"}
          endDecorator={
            <IconButton
              size="sm"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
              onClick={() => togglePasswordVisibility("showPassword")}
            >
              <EyeIcon show={show.showPassword} className="size-4" />
            </IconButton>
          }
        ></Input>
        {errors.password && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.password ? errors.password.message : ""}
          </FormHelperText>
        )}
      </FormControl>
      <FormControl error={errors.confirm_password && true}>
        <Input
          name="confirm_password"
          {...register("confirm_password", confirmPasswordValidation(password))}
          placeholder="Confirm Password"
          error={errors.confirm_password && true}
          type={show.showConfirmPassword ? "text" : "password"}
          endDecorator={
            <IconButton
              size="sm"
              sx={{ aspectRatio: 1, borderRadius: 999999 }}
              onClick={() => togglePasswordVisibility("showConfirmPassword")}
            >
              <EyeIcon show={show.showConfirmPassword} className="size-4" />
            </IconButton>
          }
        ></Input>
        {errors.confirm_password && (
          <FormHelperText className="flex items-center justify-start">
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.confirm_password ? errors.confirm_password.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl error={errors.termsAndConditions && true}>
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
            <InfoOutlined sx={{ fontSize: "15px" }} />
            {errors.termsAndConditions ? errors.termsAndConditions.message : ""}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        loading={isLoading}
        type="submit"
        color="primary"
        fullWidth
        disabled={!isValid}
      >
        Register Now
      </Button>
    </form>
  );
};

export default RegistrationForm;
