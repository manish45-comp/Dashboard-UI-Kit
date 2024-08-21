export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Enter valid Email",
  },
};

export const passwordValidation = {
  required: "Password is required",
  validate: {
    hasUpperCase: (value) =>
      /[A-Z]/.test(value) || "Must contain at least one uppercase letter",
    hasLowerCase: (value) =>
      /[a-z]/.test(value) || "Must contain at least one lowercase letter",
    hasNumber: (value) =>
      /\d/.test(value) || "Must contain at least one number",
    hasSpecialChar: (value) =>
      /[!@#$%^&*]/.test(value) || "Must contain at least one special character",
    minLength: (value) =>
      value.length >= 8 || "Password must be at least 8 characters long",
  },
};

export const confirmPasswordValidation = (password) => ({
  required: "Confirm Password is required",
  validate: (value) => value === password || "Passwords do not match",
});
