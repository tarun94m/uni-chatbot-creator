import { toast } from "sonner";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const processWithOpenAI = async (
  content: string,
  apiKey: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to process with OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    toast.error('Failed to process with OpenAI');
    throw error;
  }
};

export const processWithClaude = async (
  content: string,
  apiKey: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [{ role: 'user', content }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to process with Claude');
    }

    const data = await response.json();
    return data.content[0].text;
  } catch (error) {
    console.error('Claude Error:', error);
    toast.error('Failed to process with Claude');
    throw error;
  }
};