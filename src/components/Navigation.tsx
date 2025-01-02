import { LogIn, UserPlus, Briefcase, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold text-primary">
              <span className="text-secondary">AI</span>versity
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/product" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Briefcase className="h-4 w-4" />
                Product
              </Link>
              <Link to="/about" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Users className="h-4 w-4" />
                About Us
              </Link>
              <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button className="gap-2 bg-secondary hover:bg-secondary/90">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};