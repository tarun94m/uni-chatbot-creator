import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()
    console.log('Received request to fetch URL:', url)
    
    if (!url) {
      console.error('No URL provided')
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Add timeout to fetch request
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      console.log('Attempting to fetch URL:', url)
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      })
      
      clearTimeout(timeout)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const text = await response.text()
      console.log('Successfully fetched URL content')
      
      return new Response(
        JSON.stringify({ content: text }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      )
    } catch (fetchError) {
      clearTimeout(timeout)
      console.error('Fetch error:', fetchError)
      throw fetchError
    }
  } catch (error) {
    console.error('Error in edge function:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to fetch URL content',
        details: error.stack
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})