import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Bot, Zap, Clock, BarChart2 } from "lucide-react";

const Automation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>
      <div className="container mx-auto px-4 py-16 mt-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">
            University Process Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your university operations with intelligent automation solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">
              Transform Your University Operations
            </h2>
            <p className="text-gray-600">
              Our automation solutions help universities reduce manual workload,
              improve efficiency, and enhance the student experience through
              intelligent process automation.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Bot className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold">AI-Powered Workflows</h3>
                  <p className="text-gray-600">
                    Automate repetitive tasks with intelligent workflows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="text-secondary mt-1" />
                <div>
                  <h3 className="font-semibold">24/7 Operation</h3>
                  <p className="text-gray-600">
                    Continuous automation running around the clock
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Zap className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Increased Efficiency</h4>
                  <p className="text-gray-600">
                    Reduce manual work by up to 80% with automated processes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <BarChart2 className="text-secondary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Better Analytics</h4>
                  <p className="text-gray-600">
                    Get real-time insights into your automated processes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Live Demo
          </h2>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Demo Video Player Placeholder</p>
          </div>
          <div className="mt-8 text-center">
            <Button
              onClick={() => navigate("/demo-request")}
              className="bg-secondary hover:bg-secondary/90"
            >
              Request Full Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automation;