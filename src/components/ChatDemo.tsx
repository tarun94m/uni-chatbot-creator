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
import { supabase } from "@/integrations/supabase/client";

export const ChatDemo = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState<"openai" | "claude">("openai");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size should be less than 5MB");
        return;
      }
      setFile(selectedFile);
    }
  };

  const readFileContent = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        resolve(text as string);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  };

  const fetchUrlContent = async (url: string): Promise<string> => {
    try {
      const { data, error } = await supabase.functions.invoke('fetch-url', {
        body: { url }
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message);
      }

      if (!data?.content) {
        throw new Error('No content received from URL');
      }

      return data.content;
    } catch (error) {
      console.error('URL fetch error:', error);
      throw new Error('Failed to fetch URL content. Please try again later.');
    }
  };

  const handleSubmit = async () => {
    if (!prompt && !url && !file) {
      toast.error("Please provide at least one input (prompt, URL, or file)");
      return;
    }

    try {
      setLoading(true);
      let content = prompt;

      if (file) {
        try {
          const fileContent = await readFileContent(file);
          content += "\n\nContent from Document:\n" + fileContent;
        } catch (error) {
          console.error('File reading error:', error);
          toast.error("Failed to read document");
          return;
        }
      }

      if (url) {
        try {
          const urlContent = await fetchUrlContent(url);
          content += "\n\nContent from URL:\n" + urlContent;
        } catch (error) {
          console.error('URL fetch error:', error);
          toast.error("Failed to fetch URL content. Please try again later.");
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
          <Label>Website URL (optional)</Label>
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
            accept=".txt,.doc,.docx,.pdf"
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