import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

const plans = {
  chatbot: [
    {
      name: "Basic",
      price: "$49",
      description: "Perfect for small universities",
      features: [
        "1 Chatbot",
        "Website Crawling",
        "PDF Upload (up to 10 files)",
        "Basic Customization",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing institutions",
      features: [
        "3 Chatbots",
        "Advanced Website Crawling",
        "Unlimited PDF Upload",
        "Advanced Customization",
        "Priority Support",
        "Analytics Dashboard",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large universities",
      features: [
        "Unlimited Chatbots",
        "Custom Integration",
        "API Access",
        "24/7 Support",
        "Custom Training",
        "Dedicated Account Manager",
      ],
    },
  ],
  proofreader: [
    {
      name: "Basic",
      price: "$29",
      description: "For individual students",
      features: [
        "AI Text-to-Speech",
        "Basic Grammar Check",
        "Up to 10,000 words/month",
        "Email Support",
        "Standard Processing Speed",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      description: "For professors & researchers",
      features: [
        "Advanced AI Text-to-Speech",
        "Deep Grammar Analysis",
        "Unlimited words/month",
        "Priority Support",
        "Fast Processing Speed",
        "Export Reports",
      ],
    },
    {
      name: "Team",
      price: "$199",
      description: "For departments",
      features: [
        "All Pro Features",
        "Team Collaboration",
        "Custom Voice Options",
        "24/7 Support",
        "Bulk Processing",
        "API Access",
      ],
    },
  ],
  resume: [
    {
      name: "Basic",
      price: "$19",
      description: "For students",
      features: [
        "ATS-Optimized Templates",
        "Basic AI Suggestions",
        "PDF Export",
        "Email Support",
        "1 Resume Version",
      ],
    },
    {
      name: "Pro",
      price: "$39",
      description: "For job seekers",
      features: [
        "All Basic Features",
        "Advanced AI Suggestions",
        "Multiple Formats Export",
        "Priority Support",
        "Multiple Resume Versions",
        "Cover Letter Builder",
      ],
    },
    {
      name: "Career",
      price: "$89",
      description: "For professionals",
      features: [
        "All Pro Features",
        "Personal Career Coach AI",
        "Interview Preparation",
        "24/7 Support",
        "LinkedIn Optimization",
        "Job Search Strategy",
      ],
    },
  ],
};

export const Pricing = () => {
  const [selectedProduct, setSelectedProduct] = React.useState("chatbot");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50">
        <Navigation />
      </div>
      <div className="py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Simple Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Choose the plan that best fits your needs
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <Button
                variant={selectedProduct === "chatbot" ? "default" : "outline"}
                onClick={() => setSelectedProduct("chatbot")}
                className="bg-secondary hover:bg-secondary/90"
              >
                Chatbot
              </Button>
              <Button
                variant={selectedProduct === "proofreader" ? "default" : "outline"}
                onClick={() => setSelectedProduct("proofreader")}
                className="bg-secondary hover:bg-secondary/90"
              >
                Proofreader
              </Button>
              <Button
                variant={selectedProduct === "resume" ? "default" : "outline"}
                onClick={() => setSelectedProduct("resume")}
                className="bg-secondary hover:bg-secondary/90"
              >
                Resume Builder
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans[selectedProduct].map((plan, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-secondary/50 transition-colors"
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-secondary">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <Button
                  className="w-full mb-6 bg-secondary hover:bg-secondary/90"
                >
                  Get Started
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};