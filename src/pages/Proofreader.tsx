import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Play, Pause, Upload, CheckCircle, BookOpen, GraduationCap, Rocket, Clock, Target } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/Navigation";

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">AI-Powered Proofreader</h1>
            <p className="text-lg text-gray-600 mb-6">
              Transform your academic writing with our AI proofreader that reads your content aloud,
              helping both students and professors identify improvements effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <GraduationCap className="h-8 w-8 text-secondary mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Students</h3>
                  <p className="text-gray-600">Perfect for reviewing thesis, assignments, and research papers with AI-powered audio feedback.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <BookOpen className="h-8 w-8 text-secondary mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">For Professors</h3>
                  <p className="text-gray-600">Efficiently review student submissions and academic papers while multitasking.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Rocket className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">5x Productivity</h3>
              <p className="text-gray-600">Boost your review efficiency with AI-powered proofreading</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">Listen while multitasking, perfect for busy schedules</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 text-center">
              <Target className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Error Detection</h3>
              <p className="text-gray-600">Quickly identify mistakes and areas for improvement</p>
            </div>
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
    </div>
  );
};

export default Proofreader;