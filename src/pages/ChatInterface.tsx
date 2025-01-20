import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Loader2 } from "lucide-react";
import { processWithOpenAI, processWithClaude } from "@/lib/ai-service";
import { toast } from "sonner";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel] = useState<"openai" | "claude">(() => {
    return localStorage.getItem("selectedModel") as "openai" | "claude" || "openai";
  });

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      setIsLoading(true);
      // Add user message to chat
      const userMessage: Message = { role: 'user', content: newMessage };
      setMessages(prev => [...prev, userMessage]);
      setNewMessage("");

      // Process with selected AI model
      const response = selectedModel === "openai"
        ? await processWithOpenAI(newMessage, process.env.OPENAI_API_KEY!)
        : await processWithClaude(newMessage, process.env.ANTHROPIC_API_KEY!);

      // Add AI response to chat
      const aiMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to get response from AI");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16 mt-16">
        <Card className="max-w-4xl mx-auto h-[600px] flex flex-col">
          <CardContent className="flex-1 flex flex-col p-6">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground ml-4'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="flex gap-2 mt-4">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                disabled={isLoading}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isLoading || !newMessage.trim()}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatInterface;