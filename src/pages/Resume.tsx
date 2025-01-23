import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Briefcase, GraduationCap, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Resume Builder
            </h1>
            <p className="text-gray-600 text-lg">
              Create a professional resume with our AI-powered builder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Templates</h3>
              <p className="text-gray-600">
                Choose from professionally designed templates optimized for ATS
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
              <p className="text-gray-600">
                Easily input and format your personal information
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <p className="text-gray-600">
                Highlight your professional experience with AI suggestions
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Showcase your academic achievements and certifications
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              Start Building Your Resume
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;