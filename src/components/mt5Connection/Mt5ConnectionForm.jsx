import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useConnectMt5Mutation } from "../../../redux/api/mt5Account.api";

const Mt5ConnectionForm = () => {
  const [formData, setFormData] = useState({
    mt5_account_number: "12345678989",
    password: "TestPassword1234",
    mt5_server_details: "http://localhost:8080",
  });

  const [errors, setErrors] = useState({
    mt5_account_number: "",
    password: "",
    mt5_server_details: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [
    connectMt5,
    {
      data: connectMt5Data,
      error: connectMt5Error,
      isLoading: connectMt5Loading,
      isSuccess: connectMt5Success,
      isError: connectMt5IsError,
    },
  ] = useConnectMt5Mutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on change
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {
      mt5_account_number: "",
      password: "",
      mt5_server_details: "",
    };

    if (!formData.mt5_account_number) {
      newErrors.mt5_account_number = "MT5 account number is required";
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formData.mt5_server_details) {
      newErrors.mt5_server_details = "MT5 server details are required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;
    connectMt5({
      mt5_account_number: formData.mt5_account_number,
      password: formData.password,
      mt5_server: formData.mt5_server_details,
    });
    console.log("Form submitted with:", formData);
    // API Call or Next Steps Here
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
          One Last Step!
        </Typography>
        <Typography
          fontSize={18}
          lineHeight={1.5}
          textAlign={"center"}
          color={"#656C7B"}
          letterSpacing={0.5}
          fontWeight={300}
        >
          Just link your MT5 account, and Blaze will handle the rest.
        </Typography>
        <Stack width={"100%"} maxWidth={400} mt={4} spacing={2}>
          <FormControl fullWidth>
            <TextField
              name="mt5_account_number"
              variant="outlined"
              size="small"
              value={formData.mt5_account_number}
              onChange={handleChange}
              error={!!errors.mt5_account_number}
              helperText={errors.mt5_account_number}
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
              placeholder="MT5 account number"
              label="MT5 account number"
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
              type={showPassword ? "text" : "password"}
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
            <FormHelperText error sx={{ mx: 0.5 }}>
              Password must be different from your Exchange password
            </FormHelperText>
          </FormControl>

          <FormControlLabel
            label="Show password"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "14px",
                fontWeight: 300,
              },
            }}
            control={
              <Checkbox
                size="small"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
            }
          />

          <FormControl fullWidth>
            <TextField
              name="mt5_server_details"
              variant="outlined"
              size="small"
              value={formData.mt5_server_details}
              onChange={handleChange}
              error={!!errors.mt5_server_details}
              helperText={errors.mt5_server_details}
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
              placeholder="MT5 server details"
              label="MT5 server details"
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
            Submit
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Mt5ConnectionForm;
