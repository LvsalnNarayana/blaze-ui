import {
  Button,
  FormControl,
  LinearProgress,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../../redux/api/auth.api";
import zxcvbn from "zxcvbn";

const SignupForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: "",
  });

  const [errors, setErrors] = useState({});
  const [
    registerUser,
    {
      isLoading: registrationLoading,
      isSuccess: registrationSuccess,
      isError: registrationError,
      error: registrationErrorData,
    },
  ] = useRegisterUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
    // Check password strength when the password field is updated
    if (name === "password") {
      const result = zxcvbn(value);
      setPasswordStrength({
        score: result.score,
        feedback: result.feedback.suggestions.join(" ") || "Strong password!",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length < 10 || formData.mobile.length > 15) {
      newErrors.mobile = "Mobile number must be 10-15 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (passwordStrength.score < 4) {
      newErrors.password = "Password must be strong";
    }
    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please confirm your password";
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      registerUser(formData);
    }
  };
  return (
    <Stack
      width="100%"
      minHeight={"100vh"}
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      py={2}
    >
      <Stack
        py={isMobile && 6}
        px={isMobile && 4}
        height={!isMobile ? "100%" : "auto"}
        gap={1}
        sx={
          isMobile && {
            backgroundColor: "#fff",
            borderRadius: 6,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }
        }
        width={isMobile ? "90%" : "45%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography flexShrink={0} fontSize={44} fontWeight={600}>
          Sign up!
        </Typography>
        <Typography
          fontSize={18}
          lineHeight={1.5}
          textAlign={"center"}
          color={"#656C7B"}
          letterSpacing={0.5}
          fontWeight={300}
        >
          Just a few details, and you’re set
          <br /> for automated trading!
        </Typography>
        <Stack width={"100%"} mt={4} spacing={2}>
          <Stack direction={"row"} width={"100%"} maxWidth={400} gap={2} mt={4}>
            <FormControl fullWidth>
              <TextField
                name="firstname"
                variant="outlined"
                size="small"
                value={formData.firstname}
                onChange={handleChange}
                error={!!errors.firstname}
                helperText={errors.firstname}
                sx={{
                  "& .MuiInputBase-input": {
                    p: 1.5,
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                    fontWeight: 300,
                    mx: 0.5,
                    mt: 1,
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                }}
                placeholder="First name"
                label="First name"
                InputProps={{
                  sx: { fontSize: "14px", fontWeight: 300 },
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="lastname"
                variant="outlined"
                size="small"
                value={formData.lastname}
                onChange={handleChange}
                error={!!errors.lastname}
                helperText={errors.lastname}
                sx={{
                  "& .MuiInputBase-input": {
                    p: 1.5,
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                  "& .MuiInputBase-input::placeholder": {
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                  "& .MuiFormHelperText-root": {
                    fontSize: "12px",
                    fontWeight: 300,
                    mx: 0.5,
                    mt: 1,
                  },
                  "& .MuiFormLabel-root": {
                    fontSize: "14px",
                    fontWeight: 300,
                  },
                }}
                placeholder="Last name"
                label="Last name"
                InputProps={{
                  sx: { fontSize: "14px", fontWeight: 300 },
                }}
              />
            </FormControl>
          </Stack>
          <FormControl fullWidth>
            <TextField
              name="email"
              variant="outlined"
              size="small"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiInputBase-input": {
                  p: 1.5,
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  fontWeight: 300,
                  mx: 0.5,
                  mt: 1,
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
              }}
              placeholder="Email address"
              label="Email address"
              InputProps={{
                sx: { fontSize: "14px", fontWeight: 300 },
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="mobile"
              variant="outlined"
              size="small"
              value={formData.mobile}
              onChange={handleChange}
              error={!!errors.mobile}
              helperText={errors.mobile}
              sx={{
                "& .MuiInputBase-input": {
                  p: 1.5,
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  fontWeight: 300,
                  mx: 0.5,
                  mt: 1,
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
              }}
              placeholder="Mobile number"
              label="Mobile number"
              InputProps={{
                sx: { fontSize: "14px", fontWeight: 300 },
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              name="password"
              variant="outlined"
              size="small"
              type={"password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              sx={{
                "& .MuiInputBase-input": {
                  p: 1.5,
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  fontWeight: 300,
                  mx: 0.5,
                  mt: 1,
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
              }}
              placeholder="Password"
              label="Password"
              InputProps={{
                sx: { fontSize: "14px", fontWeight: 300 },
              }}
            />
          </FormControl>
          <LinearProgress
            variant="determinate"
            value={
              formData?.password !== "" ? (passwordStrength.score + 1) * 20 : 0
            } // Convert score (0-4) to 0-100%
            color={
              passwordStrength.score === 0
                ? "error" // Very Weak (Red)
                : passwordStrength.score === 1
                ? "error" // Weak (Red)
                : passwordStrength.score === 2
                ? "warning" // Moderate (Orange)
                : "success"
            }
          />

          <Typography
            fontSize={12}
            fontWeight={400}
            variant="body1"
            color={passwordStrength.score < 2 ? "error" : "textSecondary"}
          >
            {
              ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"][
                passwordStrength.score
              ]
            }
          </Typography>

          {/* <Typography variant="caption" color="textSecondary">
            {passwordStrength.feedback}
          </Typography> */}
          <FormControl fullWidth>
            <TextField
              name="confirm_password"
              variant="outlined"
              size="small"
              type={"password"}
              value={formData.confirm_password}
              onChange={handleChange}
              error={!!errors.confirm_password}
              helperText={errors.confirm_password}
              sx={{
                "& .MuiInputBase-input": {
                  p: 1.5,
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiInputBase-input::placeholder": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
                "& .MuiFormHelperText-root": {
                  fontSize: "12px",
                  fontWeight: 300,
                  mx: 0.5,
                  mt: 1,
                },
                "& .MuiFormLabel-root": {
                  fontSize: "14px",
                  fontWeight: 300,
                },
              }}
              placeholder="Confirm Password"
              label="Confirm Password"
              InputProps={{
                sx: { fontSize: "14px", fontWeight: 300 },
              }}
            />
          </FormControl>
          <Button
            width={"100%"}
            variant={"contained"}
            sx={{
              px: 2,
              py: 1,
              backgroundColor: "#1058DF",
              color: "#fff",
              borderRadius: "100px",
            }}
            onClick={handleSubmit}
          >
            Sign up
          </Button>
          <Typography
            variant="body1"
            textAlign={"center"}
            lineHeight={1.5}
            letterSpacing={0.5}
            fontSize={14}
            fontWeight={300}
            mx="auto"
          >
            Already a member of Blaze?&nbsp;
            <Link to="/signin">Sign in</Link>
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupForm;
