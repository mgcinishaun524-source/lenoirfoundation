// AI Service Integration for LeNoir Foundation Assistant
// Supports: OpenAI, Google Gemini, ElevenLabs

interface AIResponse {
  text: string;
  audio?: string; // For ElevenLabs voice responses
}

interface AIServiceConfig {
  provider: 'openai' | 'gemini' | 'elevenlabs';
  apiKey: string;
  model?: string;
}

class AIService {
  private config: AIServiceConfig;
  private lenoirContext: string;

  constructor(config: AIServiceConfig) {
    this.config = config;
    
    // Comprehensive context about LeNoir Foundation
    this.lenoirContext = `
You are the official AI assistant for LeNoir Foundation, a UK-based charity that bridges the digital divide.

ORGANIZATION OVERVIEW:
- Mission: Uplift marginalized communities through digital literacy, library resources, and improved internet accessibility
- Founded by James Mawaka, who grew up between Zimbabwe and Luton
- 10+ years of operation, 4,800+ students supported globally
- Active in Zimbabwe, Zambia, with UK expansion launching June 2026

PROGRAMMES:
1. TypeSpark Africa: Computer labs, digital skills training, 50+ schools equipped
2. UK Digital Inclusion Programme: Free digital drop-ins in Luton and Tower Hamlets starting 2026
3. Digital Literacy Training: Comprehensive curriculum from basic skills to job applications

KEY STATS:
- 4,800+ students supported globally
- 50+ schools equipped with computer labs
- 300+ teachers trained
- 200+ volunteers engaged
- 3 countries actively served

WAYS TO GET INVOLVED:
- Donate money or equipment (laptops, tablets)
- Volunteer for teaching, technical support, mentoring
- Corporate partnerships and sponsorships
- School lab sponsorship (£5,000), student support (£50/year)

LOCATIONS:
- HQ: 85-90 Paul Street, London EC2A 4NE
- Zimbabwe: 30+ schools since 2014
- Zambia: 20+ schools since 2018  
- UK Launch: Luton (June 2026), Tower Hamlets (Late 2026)

FOUNDER: James Mawaka - experienced digital inequality firsthand sharing one computer between six siblings, found refuge in Luton public library.

Answer questions naturally and conversationally, providing specific details from this context. Be helpful, engaging, and passionate about the mission. Include relevant statistics and examples when appropriate.
`;
  }

  async generateResponse(userMessage: string): Promise<AIResponse> {
    try {
      switch (this.config.provider) {
        case 'openai':
          return await this.callOpenAI(userMessage);
        case 'gemini':
          return await this.callGemini(userMessage);
        case 'elevenlabs':
          return await this.callElevenLabs(userMessage);
        default:
          throw new Error('Unsupported AI provider');
      }
    } catch (error) {
      console.error('AI Service Error:', error);
      return {
        text: "I'm having trouble connecting right now. Please try asking your question again, or contact us directly through our website."
      };
    }
  }

  private async callOpenAI(userMessage: string): Promise<AIResponse> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: this.config.model || 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: this.lenoirContext
          },
          {
            role: 'user', 
            content: userMessage
          }
        ],
        max_tokens: 500,
        temperature: 0.7
      })
    });

    const data = await response.json();
    return {
      text: data.choices[0].message.content
    };
  }

  private async callGemini(userMessage: string): Promise<AIResponse> {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.config.apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${this.lenoirContext}\n\nUser Question: ${userMessage}`
              }
            ]
          }
        ],
        generationConfig: {
          maxOutputTokens: 500,
          temperature: 0.7
        }
      })
    });

    const data = await response.json();
    return {
      text: data.candidates[0].content.parts[0].text
    };
  }

  private async callElevenLabs(userMessage: string): Promise<AIResponse> {
    // First generate text response (would need another AI service for text generation)
    // Then convert to speech with ElevenLabs
    
    // For now, return text response - ElevenLabs is primarily for voice synthesis
    const textResponse = "ElevenLabs integration would require a text AI + voice synthesis combination.";
    
    // Voice synthesis call (example)
    const voiceResponse = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/VOICE_ID`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: textResponse,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      })
    });

    const audioBlob = await voiceResponse.blob();
    const audioUrl = URL.createObjectURL(audioBlob);

    return {
      text: textResponse,
      audio: audioUrl
    };
  }
}

export default AIService;

// Example usage:
/*
const aiService = new AIService({
  provider: 'gemini',
  apiKey: 'your-api-key-here',
  model: 'gemini-pro'
});

const response = await aiService.generateResponse("What is LeNoir Foundation's mission?");
console.log(response.text);
*/