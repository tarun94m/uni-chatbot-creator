import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-primary/10 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-8 text-5xl font-bold tracking-tight text-primary md:text-6xl">
            Create AI Chatbots for Your University
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Transform your university's website into an intelligent chatbot. Upload
            PDFs, crawl websites, or input text directly to create custom AI
            assistants.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              View Demo
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -top-40 left-0 right-0 z-[-1]">
        <div className="h-[500px] w-full bg-gradient-to-b from-secondary/20 to-transparent blur-3xl"></div>
      </div>
    </div>
  );
};
