import { LogIn, UserPlus, Briefcase, Users, Mail, Chrome, MessageSquare, ChevronDown, Cpu, Notebook, Video } from "lucide-react";
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
    <nav className="fixed top-0 left-0 right-0 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <Cpu className="h-6 w-6 text-secondary" />
            <span className="text-secondary">AI</span>versity
          </Link>
          
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link to="/product" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                  <Briefcase className="h-4 w-4" />
                  Product
                  <ChevronDown className="h-4 w-4" />
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem onClick={() => navigate("/chatbot")} className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chatbot
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/mock-interview")} className="gap-2">
                  <Video className="h-4 w-4" />
                  Mock Interview
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/note-taker")} className="gap-2">
                  <Notebook className="h-4 w-4" />
                  Note Taker
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
            <Button 
              onClick={() => navigate("/login")} 
              variant="ghost" 
              className="gap-2"
            >
              <LogIn className="h-4 w-4" />
              Login
            </Button>

            <Button 
              onClick={() => navigate("/signup")} 
              className="gap-2 bg-secondary hover:bg-secondary/90"
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};