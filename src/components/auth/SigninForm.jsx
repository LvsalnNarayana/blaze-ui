import React, { useState } from "react";
import {
  FormControl,
  Stack,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  FormLabel,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSignIn } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const { signIn, isLoaded, setActive } = useSignIn();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", auth: "" });
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { email: "", password: "", auth: "" };

    if (!email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailSignIn = async () => {
    if (!isLoaded || loading) return;
    if (!validateForm()) return;

    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: email,
        password: password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrors((prev) => ({
        ...prev,
        auth: "Invalid email or password",
      }));
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    if (!isLoaded || loading) return;

    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
      });
    } catch (error) {
      console.error("Google Sign-in failed:", error);
      setErrors((prev) => ({
        ...prev,
        auth: "Google Sign-in failed. Try again.",
      }));
    }
  };

  return (
    <Stack width="100%" height={"100%"} justifyContent="center" alignItems="center" spacing={2}>
      <Stack width="45%" spacing={3} alignItems="center">
        <Typography variant="h4" fontSize={36} fontWeight={500}>
          Signin
        </Typography>
        <Divider flexItem />
        {/* Email Input */}
        <FormControl fullWidth>
          <FormLabel htmlFor="email" sx={{ mb: 1, fontSize: "14px" }}>
            Email
          </FormLabel>
          <TextField
            name="email"
            variant="outlined"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            }}
            placeholder="Enter your email"
            InputProps={{
              sx: { fontSize: "14px" },
            }}
          />
        </FormControl>

        {/* Password Input with Toggle Visibility */}
        <FormControl fullWidth>
          <FormLabel htmlFor="password" sx={{ mb: 1, fontSize: "14px" }}>
            Password
          </FormLabel>
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            }}
            placeholder="Enter your password"
            InputProps={{
              sx: { fontSize: "14px" },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        {/* Sign-in Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleEmailSignIn}
          disabled={loading}
          width={"100%"}
          sx={{
            px: 2,
            py: 1,
            backgroundColor: "#1058DF",
            color: "#fff",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 300,
          }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </Button>
        {/* <Divider flexItem>
          <Typography variant="body1" fontSize={14}>
            or
          </Typography>
        </Divider>
        <Button
          fullWidth
          variant="outlined"
          onClick={handleGoogleSignIn}
          disabled={loading}
          sx={{
            px: 2,
            py: 1,
            borderColor: "#1058DF",
            color: "#1058DF",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 300,
          }}
          startIcon={<img src="/google.png" alt="Google logo" width="20" />}
        >
          Sign in with Google
        </Button> */}
        <Typography fontSize={14} fontWeight={300} mx="auto">
          Don&apos;t have an account? <Link to="/signup">Sign up</Link>
        </Typography>

        {/* Display Authentication Errors */}
        {errors.auth && (
          <Typography color="error" fontSize="14px" textAlign="center">
            {errors.auth}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default SigninForm;
