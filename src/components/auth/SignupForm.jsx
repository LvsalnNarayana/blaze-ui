import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../../../redux/api/auth.api";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: "Test",
    lastname: "User4",
    email: "test4@blazealgo.com",
    mobile: "0987654321",
    password: "f6jURAi9nYRxBL2",
    confirm_password: "f6jURAi9nYRxBL2",
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

  // console.log({
  //   registrationLoading,
  //   registrationSuccess,
  //   registrationError,
  //   registrationErrorData,
  // });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: "" }));
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
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      console.log("Form Data Submitted:", formData);

      registerUser(formData);
    }
  };
  return (
    <Stack width="100%" justifyContent="center" alignItems="center" spacing={2}>
      <Stack
        gap={1}
        width={"55%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography fontSize={44} fontWeight={600}>
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
        <Stack width={"100%"} maxWidth={400} mt={4} spacing={2}>
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
