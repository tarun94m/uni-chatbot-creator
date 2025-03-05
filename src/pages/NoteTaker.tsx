import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Video, Mic, FileText } from "lucide-react";

const NoteTaker = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-6">AI Note Taker</h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your video calls and interviews into actionable insights with our AI-powered note-taking solution.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <Video className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Video Call Integration</h3>
                <p className="text-gray-600">
                  Seamlessly integrates with your video conferencing platforms.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <Mic className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-time Transcription</h3>
                <p className="text-gray-600">
                  Accurate speech-to-text conversion during your calls.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <FileText className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Smart Summaries</h3>
                <p className="text-gray-600">
                  AI-generated summaries with key points and action items.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/demo-request")}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2"
              >
                Request Demo
              </Button>
              <Button
                onClick={() => navigate("/pricing")}
                variant="outline"
                className="px-8 py-2"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NoteTaker;