import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, ArrowRight, Clock, BarChart3, Users, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { ChatDemo } from "@/components/ChatDemo";

const Chatbot = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/demo-request");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            AI-Powered University Chatbot
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your university's student support with our intelligent chatbot solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Experience the Future of Student Support
            </h2>
            <p className="text-gray-600">
              Our AI chatbot understands complex queries, provides instant responses,
              and learns from every interaction to better serve your students.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Bot className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold">24/7 Availability</h3>
                  <p className="text-gray-600">
                    Provide round-the-clock support to your students
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquare className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold">Natural Conversations</h3>
                  <p className="text-gray-600">
                    Advanced NLP for human-like interactions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-primary">Live Demo</h3>
                <MessageSquare className="text-secondary h-6 w-6" />
              </div>
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "Hi! I'm your AI assistant. Ask me anything about the university!"
                  </p>
                </div>
                <div className="bg-secondary/10 p-4 rounded-lg ml-8">
                  <p className="text-gray-700">
                    "What programs do you offer in Computer Science?"
                  </p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "We offer Bachelor's and Master's degrees in Computer Science, with specializations in AI, Cybersecurity, and Software Engineering..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Demo Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Try Our AI Chat Demo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of our AI chatbot with document and URL processing capabilities
            </p>
          </div>
          <ChatDemo />
        </div>

        {/* AI Technology Section */}
        <div className="py-16 bg-secondary/5 rounded-lg mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">
                AI Chat Technology
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <Clock className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  24/7 Personalized Support
                </h3>
                <p className="text-gray-600">
                  Personalized support for every learner, available around the clock.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <MessageSquare className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Multi-Channel Communication
                </h3>
                <p className="text-gray-600">
                  Conversational AI engages proactively through SMS text messaging and web platforms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <BarChart3 className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  Deep Insights
                </h3>
                <p className="text-gray-600">
                  Comprehensive reporting and analytics provide deep insight into the student experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Button
            onClick={handleDemoClick}
            className="bg-secondary hover:bg-secondary/90 gap-2"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/pricing")}
            className="gap-2"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;