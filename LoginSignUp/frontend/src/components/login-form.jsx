// src/components/login-form.jsx

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({handleonSubmit}) {
  return (
    // --- Styling the main container card ---
    <Card className="w-full max-w-sm bg-black border-gray-800 shadow-lg">
      <CardHeader className="text-center">
        {/* --- Styling the title and description --- */}
        <CardTitle className="text-3xl font-bold text-white">Login Component</CardTitle>
        <CardDescription className="text-gray-400 pt-2">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            
            {/* --- Styling the Email field --- */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com" 
                required 
                className="bg-gray-900 border-gray-700 text-white" 
              />
            </div>
            {/* --- Styling the Username field --- */}
            <div className="grid gap-2">
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="username.." 
                required 
                className="bg-gray-900 border-gray-700 text-white" 
              />
            </div>

            {/* --- Styling the Password field --- */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-gray-300">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-blue-400 underline-offset-4 hover:text-blue-300 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                required 
                placeholder="Password"
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>

            {/* --- Styling the Buttons --- */}
            <div className="flex flex-col gap-3 pt-2">
              <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200">
                Login
              </Button>

            </div>

          </div>
          <div className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="underline underline-offset-4 text-blue-400 hover:text-blue-300">
              Sign up
            </a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}