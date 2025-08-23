// src/app/login/Login.jsx
import { LoginForm } from "@/components/login-form";
import React from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = async (data) => {
    try {
      console.log("Login data received:", data);
      
      const response = await axios.post("/api/v1/user/login", data);

      console.log("Login successful:", response.data);
      login(response.data.user);
      // No navigation needed - the App component will automatically show WelcomeMessage when user is logged in
    }
    catch (error) {
      console.error("Login failed:", error);
      if (error.response) {
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
      }
    }
  };      

  return <LoginForm onSubmit={handleLogin} />
}