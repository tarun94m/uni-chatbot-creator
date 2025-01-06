import { LogIn, UserPlus, Briefcase, Users, Mail, Chrome, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            <span className="text-secondary">AI</span>versity
          </Link>
          
          {/* Centered navigation links */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link to="/product" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Briefcase className="h-4 w-4" />
                  Product
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/chatbot")} className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chatbot
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Users className="h-4 w-4" />
              About Us
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Login Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="gap-2">
                  <Chrome className="h-4 w-4" />
                  Google Login
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <LogIn className="h-4 w-4" />
                  SSO Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign Up Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2 bg-secondary hover:bg-secondary/90">
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="gap-2">
                  <Chrome className="h-4 w-4" />
                  Sign up with Google
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};