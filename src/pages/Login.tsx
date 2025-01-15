import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateUniversityEmail = (email: string) => {
    // Basic check for .edu domain
    return email.toLowerCase().endsWith('.edu');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateUniversityEmail(email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please use a valid university email address (.edu)",
      });
      return;
    }

    // Here you would typically handle the authentication
    // For now, we'll just show a success message
    toast({
      title: "Login Attempted",
      description: "Login functionality will be implemented with backend integration.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg m-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary">Login to AIversity</h1>
            <p className="text-gray-600 mt-2">Please use your university email</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">University Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.name@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="text-center text-sm">
            <a href="#" className="text-secondary hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;