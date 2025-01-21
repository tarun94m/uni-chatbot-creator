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
    const { data, error } = await supabase.functions.invoke('chat-completion', {
      body: { content }
    });

    if (error) {
      console.error('OpenAI Error:', error);
      const errorMessage = error.message.includes('quota exceeded')
        ? 'OpenAI API quota exceeded. Please try again later or contact support.'
        : error.message;
      throw new Error(errorMessage);
    }

    return data.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    toast.error((error as Error).message);
    throw error;
  }
};

export const processWithClaude = async (
  content: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 2000,
        messages: [{ role: 'user', content }],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Claude Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to process with Claude');
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Claude Error:', error);
    toast.error('Failed to process with Claude: ' + (error as Error).message);
    throw error;
  }
};