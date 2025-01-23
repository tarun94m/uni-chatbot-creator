import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Proofreader = () => {
  const [content, setContent] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const handleTextToSpeech = async () => {
    if (!content.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to proofread",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsProcessing(true);
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text: content, voice: 'alloy' }
      });

      if (error) throw error;

      if (data.audioContent) {
        const audio = new Audio(`data:audio/mp3;base64,${data.audioContent}`);
        setAudioElement(audio);
        audio.play();
        setIsPlaying(true);
        
        audio.onended = () => {
          setIsPlaying(false);
        };
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to convert text to speech",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const togglePlayPause = () => {
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        setContent(text);
        toast({
          title: "Success",
          description: "File content loaded successfully",
        });
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-6">AI Proofreader</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span>Listen to your content read aloud by AI for better error detection</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span>Perfect for proofreading thesis, projects, and academic papers</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <span>Identify flow issues and awkward phrasing through audio feedback</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Content Editor</h2>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => document.getElementById('file-upload')?.click()}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
              <input
                type="file"
                id="file-upload"
                accept=".txt,.doc,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </div>

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter or paste your content here..."
            className="min-h-[300px] mb-6"
          />

          <div className="flex justify-end gap-4">
            <Button
              onClick={audioElement ? togglePlayPause : handleTextToSpeech}
              disabled={isProcessing || !content.trim()}
              className="w-32"
            >
              {isProcessing ? (
                "Processing..."
              ) : audioElement ? (
                <>
                  {isPlaying ? (
                    <><Pause className="h-4 w-4 mr-2" /> Pause</>
                  ) : (
                    <><Play className="h-4 w-4 mr-2" /> Resume</>
                  )}
                </>
              ) : (
                <><Play className="h-4 w-4 mr-2" /> Start</>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proofreader;