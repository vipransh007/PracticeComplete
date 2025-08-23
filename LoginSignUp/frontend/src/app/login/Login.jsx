// src/app/login/Login.jsx
import { LoginForm } from "@/components/login-form";

const handleOnSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  console.log("Form submitted");
};

export default function Login() {
  return (
    <LoginForm onSubmit={handleOnSubmit}/>
  );
}