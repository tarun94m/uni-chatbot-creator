import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const ChatDemo = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<"openai" | "claude">("openai");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      let content = prompt;

      if (file) {
        const text = await file.text();
        content += "\n\nContent from PDF/Document:\n" + text;
      }

      if (url) {
        try {
          const response = await fetch(url);
          const text = await response.text();
          content += "\n\nContent from URL:\n" + text;
        } catch (error) {
          console.error('URL fetch error:', error);
          toast.error("Failed to fetch URL content");
          return;
        }
      }

      // Store the data in localStorage
      localStorage.setItem("selectedModel", selectedModel);
      localStorage.setItem("initialPrompt", content);
      
      // Navigate to chat interface
      navigate("/chat-interface");
      
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to process request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>AI Chat Demo</CardTitle>
        <CardDescription>
          Try our AI chat with document and URL processing capabilities
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Select AI Model</Label>
          <div className="flex gap-4">
            <Button
              variant={selectedModel === "openai" ? "default" : "outline"}
              onClick={() => setSelectedModel("openai")}
            >
              GPT-4
            </Button>
            <Button
              variant={selectedModel === "claude" ? "default" : "outline"}
              onClick={() => setSelectedModel("claude")}
            >
              Claude
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Your Question or Prompt</Label>
          <Textarea
            placeholder="Enter your question or prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>University URL (optional)</Label>
          <Input
            type="url"
            placeholder="Enter URL to process..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Upload Document (optional)</Label>
          <Input
            type="file"
            accept=".pdf,.txt,.doc,.docx"
            onChange={handleFileChange}
          />
          {file && (
            <p className="text-sm text-muted-foreground">
              Selected file: {file.name}
            </p>
          )}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={loading || (!prompt && !url && !file)}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Process with AI
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};