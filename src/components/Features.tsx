import { Bot, Globe, FileText, Video, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Website Crawling",
    description:
      "Automatically extract information from your university website",
    icon: Globe,
    path: "/chatbot",
  },
  {
    title: "PDF Processing",
    description: "Upload and process PDF documents for your chatbot",
    icon: FileText,
    path: "/chatbot",
  },
  {
    title: "AI Integration",
    description: "Powered by Claude and ChatGPT for intelligent responses",
    icon: Bot,
    path: "/chatbot",
  },
  {
    title: "Mock Interview",
    description: "Practice interviews with AI-powered feedback",
    icon: Video,
    path: "/mock-interview",
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with AI assistance",
    icon: Briefcase,
    path: "/resume",
  },
];

export const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create and deploy AI chatbots for your
            university
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:border-secondary/50 transition-colors cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};