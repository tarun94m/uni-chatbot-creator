import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mic, Video, Play } from "lucide-react";

const MockInterview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            AI-Powered Mock Interviews
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practice and improve your interview skills with our AI-powered mock interview platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Mic className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Voice Recognition</h3>
            <p className="text-gray-600">Practice speaking clearly and confidently with real-time voice feedback</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Video Analysis</h3>
            <p className="text-gray-600">Get feedback on your body language and presentation skills</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
              <Play className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
            <p className="text-gray-600">Receive detailed feedback and suggestions for improvement</p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={() => navigate("/demo-request")} 
            className="bg-secondary hover:bg-secondary/90"
          >
            Try Mock Interview Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;