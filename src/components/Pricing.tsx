import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
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
];

export const Pricing = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">Simple Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your university's needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
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
                className={`w-full mb-6 ${
                  index === 1
                    ? "bg-secondary hover:bg-secondary/90"
                    : "bg-primary hover:bg-primary/90"
                }`}
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
  );
};