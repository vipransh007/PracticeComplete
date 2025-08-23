import Login from './app/login/Login.jsx';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
// 👇 You were missing this import
import { useAuth } from "./context/AuthContext.jsx";

function WelcomeMessage() {
  const { user, logout } = useAuth();
  // ... rest of WelcomeMessage component is correct
  return (
    <div className='text-white text-center'>
      <h2 className='text-2xl mb-4'>Welcome, {user.username}!</h2>
      <button
        onClick={logout}
        className='px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700'
      >
        Logout
      </button>
    </div>
  );
}

function App() {
  const { user } = useAuth();
  // ... rest of App component is correct
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-800 p-8">
      {user ? (
        <WelcomeMessage />
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;