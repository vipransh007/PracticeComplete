import Login from './app/login/Login.jsx';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 bg-gray-800 p-8">
      
      {/* This is your imported Login component from the other file */}
      <Login />

      {/* STYLING THIS SECOND LOGIN FORM 👇 */}
      <div className="w-full max-w-sm space-y-6 rounded-2xl bg-black p-8 shadow-lg"> {/* Added max-width, more padding, shadow */}
        
        {/* --- Styling the Heading --- */}
        <h1 className="text-center text-3xl font-bold text-white"> {/* Centered, bigger, and bold */}
          Custom Login Form
        </h1>
        
        {/* --- Styling the Form Fields --- */}
        <div className="space-y-4"> {/* Increased space between fields */}
          
          <div className="space-y-2">
            <Label htmlFor="email-2" className="text-sm font-medium text-gray-400">Email</Label> {/* Lighter text color */}
            <Input 
              type="email" 
              id="email-2" 
              placeholder="your@email.com" 
              className="bg-gray-900 text-white border-gray-700 focus:ring-blue-500" /* Custom input colors */
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="username-2" className="text-sm font-medium text-gray-400">Username</Label>
            <Input 
              type="text" 
              id="username-2" 
              placeholder="Username..." 
              className="bg-gray-900 text-white border-gray-700 focus:ring-blue-500" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password-2" className="text-sm font-medium text-gray-400">Password</Label>
            <Input 
              type="password" 
              id="password-2" 
              placeholder="Password" 
              className="bg-gray-900 text-white border-gray-700 focus:ring-blue-500" 
            />
          </div>

        </div>

        {/* --- Styling the Button --- */}
        <Button type="submit" className={'w-full bg-white text-black hover:bg-gray-200'}> {/* Full width and hover effect */}
          Click Me
        </Button>
      </div>

    </div>
  );
}

export default App;