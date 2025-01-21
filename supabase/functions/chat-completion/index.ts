import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Received request to chat-completion function');
    
    if (!openAiKey) {
      console.error('OpenAI API key not configured');
      throw new Error('OpenAI API key not configured');
    }

    const { content } = await req.json();
    console.log('Processing content with OpenAI');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content }],
          temperature: 0.7,
          max_tokens: 2000,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI API error:', error);
        
        // Check specifically for quota exceeded error
        if (error.error?.message?.includes('quota exceeded')) {
          throw new Error('OpenAI API quota exceeded. Please try again later or contact support.');
        }
        
        throw new Error(error.error?.message || 'Failed to process with OpenAI');
      }

      const data = await response.json();
      console.log('Successfully received response from OpenAI');
      
      return new Response(
        JSON.stringify({ content: data.choices[0].message.content }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    console.error('Error in chat-completion function:', error);
    
    // Check if it's an abort error
    if (error.name === 'AbortError') {
      return new Response(
        JSON.stringify({ error: 'Request timed out after 30 seconds' }),
        { 
          status: 504,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Return a properly formatted error response
    return new Response(
      JSON.stringify({ 
        error: error.message,
        status: error.message.includes('quota exceeded') ? 429 : 500
      }),
      { 
        status: error.message.includes('quota exceeded') ? 429 : 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});