import { Copyright } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <Copyright className="h-4 w-4" />
          <span>{currentYear} AI. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};