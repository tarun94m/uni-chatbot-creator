import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const processWithOpenAI = async (
  content: string
): Promise<string> => {
  try {
    console.log('Processing with OpenAI:', content);
    const { data, error } = await supabase.functions.invoke('chat-completion', {
      body: { content }
    });

    if (error) {
      console.error('OpenAI Error:', error);
      throw new Error(error.message);
    }

    if (!data?.content) {
      throw new Error('No response received from OpenAI');
    }

    return data.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    toast.error('Failed to process with OpenAI: ' + (error as Error).message);
    throw error;
  }
};

export const processWithClaude = async (
  content: string
): Promise<string> => {
  try {
    console.log('Processing with Claude:', content);
    const { data, error } = await supabase.functions.invoke('claude-completion', {
      body: { content }
    });

    if (error) {
      console.error('Claude Error:', error);
      throw new Error(error.message);
    }

    if (!data?.content) {
      throw new Error('No response received from Claude');
    }

    return data.content;
  } catch (error) {
    console.error('Claude Error:', error);
    toast.error('Failed to process with Claude: ' + (error as Error).message);
    throw error;
  }
};