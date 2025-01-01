import { ArrowUp, Rocket, ChartBarIcon, BoltIcon, CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Increased ROI",
    description:
      "Reduce support costs while improving student satisfaction with 24/7 automated assistance",
    icon: ArrowUp,
  },
  {
    title: "Enhanced Productivity",
    description:
      "Free up staff time by automating routine inquiries and focusing on complex student needs",
    icon: Rocket,
  },
  {
    title: "Improved Efficiency",
    description:
      "Quick and accurate responses to student queries, reducing response times by up to 90%",
    icon: BoltIcon,
  },
];

export const Benefits = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Choose AIversity?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your university's communication with AI-powered chatbots
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};