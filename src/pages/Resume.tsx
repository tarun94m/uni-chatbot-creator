import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FileText, Briefcase, GraduationCap, User, Star, Award } from "lucide-react";
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
            <p className="text-gray-600 text-lg mb-6">
              Create a professional resume with our AI-powered builder that helps you stand out and get noticed by recruiters
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-secondary">
                <Star className="w-5 h-5" />
                <span>ATS-Optimized Templates</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Award className="w-5 h-5" />
                <span>98% Interview Success Rate</span>
              </div>
            </div>
          </div>

          <div className="bg-secondary/5 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Resume Builder?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">ATS-Friendly Format</h3>
                <p className="text-gray-600">Our templates are designed to pass Applicant Tracking Systems with high scores, ensuring your resume reaches human recruiters.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Professional Templates</h3>
                <p className="text-gray-600">Choose from a variety of professionally designed templates that catch the eye while maintaining clean, professional standards.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">AI-Powered Suggestions</h3>
                <p className="text-gray-600">Get intelligent suggestions for skills, achievements, and job descriptions that make your experience stand out.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Easy Customization</h3>
                <p className="text-gray-600">Quickly customize your resume for different job applications while maintaining consistent professional formatting.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Templates</h3>
              <p className="text-gray-600">
                Choose from professionally designed templates optimized for ATS with proven success rates
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Details</h3>
              <p className="text-gray-600">
                Easily input and format your personal information with professional styling
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
              <p className="text-gray-600">
                Highlight your professional experience with AI-powered achievement suggestions
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:border-secondary/50 transition-colors">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                Showcase your academic achievements and certifications in an impactful way
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