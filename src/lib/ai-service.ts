import { toast } from "sonner";

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const processWithOpenAI = async (
  content: string
): Promise<string> => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content }],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to process with OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    toast.error('Failed to process with OpenAI: ' + error.message);
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
        max_tokens: 1024,
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
    toast.error('Failed to process with Claude: ' + error.message);
    throw error;
  }
};