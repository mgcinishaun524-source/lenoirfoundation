import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, MicOff, Volume2 } from 'lucide-react';
import { lenoirKnowledge } from '../data/lenoirKnowledge';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hi! I'm the LeNoir Foundation AI assistant powered by ElevenLabs. I can tell you everything about our work bridging the digital divide, our programmes in Africa and the UK, how to get involved, and much more. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Generate comprehensive AI response using knowledge base  
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message === '') {
      return `Hello! I'm your LeNoir Foundation assistant. I can tell you everything about our work bridging the digital divide.\n\nTry asking me:\n• What is your mission?\n• Tell me about TypeSpark Africa\n• How can I donate?\n• Where do you work?\n• Who is the founder?`;
    }
    
    // Mission and about queries
    if (message.includes('mission') || message.includes('what do you do') || message.includes('what is lenoir') || message.includes('tell me about lenoir')) {
      return `Our mission is to uplift the most marginalized communities through digital literacy, library resources, and improved internet accessibility.\n\nOur vision is a world where every child has equal access to digital opportunities and can participate fully in the digital economy.\n\nWe've supported ${lenoirKnowledge.impact.global.studentsSupported} students across ${lenoirKnowledge.impact.global.countriesServed} countries over ${lenoirKnowledge.impact.global.yearsActive} years of programme delivery.`;
    }
    
    // TypeSpark Africa queries
    if (message.includes('typespark') || message.includes('africa') || message.includes('zimbabwe') || message.includes('zambia') || message.includes('schools')) {
      const typespark = lenoirKnowledge.programmes.typespark;
      return `TypeSpark Africa is our flagship programme. ${typespark.description}\n\nWhat we provide:\n• Complete computer lab setups with refurbished equipment\n• Structured digital literacy curriculum\n• Teacher training and support\n• Internet connectivity solutions\n• Ongoing technical support and maintenance\n\nOur impact: ${typespark.reach}\nCountries: Zimbabwe (30+ schools), Zambia (20+ schools)`;
    }
    
    // UK Programme queries
    if (message.includes('uk') || message.includes('luton') || message.includes('tower hamlets') || message.includes('britain') || message.includes('england')) {
      const uk = lenoirKnowledge.programmes.ukProgramme;
      return `Our UK Digital Inclusion Programme launches ${uk.launchDate}!\n\n${uk.description}\n\nWhat we're offering:\n• Free Digital Drop-Ins - weekly 2-hour sessions\n• Refurbished device distribution\n• Free connectivity through mobile data SIMs\n• Learn My Way curriculum delivery\n• One-to-one Digital Champion support\n\nWe're targeting 1.52M UK adults completely offline and 8.5M lacking essential digital skills.`;
    }
    
    // Donation queries
    if (message.includes('donate') || message.includes('give') || message.includes('money') || message.includes('fund') || message.includes('support financially')) {
      const sponsorship = lenoirKnowledge.involvement.sponsorship;
      return `There are many ways to support us financially:\n\nSponsorship Options:\n• ${sponsorship.schoolLab}\n• ${sponsorship.studentYear}\n• ${sponsorship.teacherTraining}\n• ${sponsorship.ukSession}\n\nEquipment Donations: We accept laptops, tablets, desktops - we refurbish and deploy them to communities in need.\n\nCorporate Partnerships: Bulk donations, employee volunteering, CSR funding.\n\nReady to donate? Visit our website's donation page!`;
    }
    
    // Volunteer queries
    if (message.includes('volunteer') || message.includes('help') || message.includes('work with you') || message.includes('get involved')) {
      const vol = lenoirKnowledge.involvement.volunteering;
      return `We'd love to have you volunteer with us!\n\nTeaching Roles: ${vol.teaching}\n\nTechnical Roles: ${vol.technical}\n\nMentoring: ${vol.mentoring}\n\nAdmin Support: ${vol.admin}\n\nRequirements: ${vol.requirements}\n\nBenefits: Training provided, flexible hours, reference letters for students, and incredible impact on communities!`;
    }
    
    // Statistics and impact
    if (message.includes('impact') || message.includes('numbers') || message.includes('statistics') || message.includes('how many') || message.includes('stats')) {
      const impact = lenoirKnowledge.impact.global;
      return `Here's our global impact:\n\n• ${impact.studentsSupported} students supported\n• ${impact.yearsActive} years of programme delivery\n• ${impact.countriesServed} countries actively served\n• ${impact.schoolsEquipped} schools equipped with computer labs\n• ${impact.volunteersEngaged} volunteers engaged\n\nIn Africa specifically:\n• ${lenoirKnowledge.impact.africa.studentsReached} students reached\n• ${lenoirKnowledge.impact.africa.teachersTrained} teachers trained\n• ${lenoirKnowledge.impact.africa.computerLabs} computer labs established\n\nWe're continuously expanding our reach to bridge the digital divide globally.`;
    }
    
    // Founder queries
    if (message.includes('founder') || message.includes('james') || message.includes('mawaka') || message.includes('who started') || message.includes('ceo')) {
      const founder = lenoirKnowledge.team.founder;
      return `${founder.name} is our Founder and CEO.\n\nHis story: ${founder.background}\n\nThe inspiration: ${founder.inspiration}\n\nHis vision: ${founder.vision}\n\nExperience: ${founder.experience}\n\nAs James says: "I had one computer to share between six siblings. The library is what gave me a quiet place to actually use it. We're building more of those places wherever they're needed."`;
    }
    
    // Location and contact queries
    if (message.includes('where') || message.includes('location') || message.includes('office') || message.includes('contact') || message.includes('address')) {
      const hq = lenoirKnowledge.locations.headquarters;
      return `Here's where you can find us:\n\nLondon HQ: ${hq.address}\nPhone: ${hq.contact}\nTeam Size: ${hq.team}\n\nGlobal Operations:\n• Zimbabwe: 30+ schools since 2014\n• Zambia: 20+ schools since 2018\n• UK: Launching June 2026 in Luton\n\nOffice Hours: Monday-Friday, 9AM-5PM GMT\n\nWe'd love to hear from you!`;
    }
    
    // Partnership and corporate
    if (message.includes('partner') || message.includes('corporate') || message.includes('business') || message.includes('collaborate')) {
      return `We have exciting partnership opportunities:\n\nCorporate Partners:\n• Equipment donations (laptops, tablets)\n• Employee volunteering programmes\n• CSR funding partnerships\n• Skills-based volunteering\n\nCurrent Partners:\n• ElevenLabs (AI Voice Technology)\n• Good Things Foundation\n• National Digital Inclusion Network\n\nEducational Partners:\n• School partnerships\n• Teacher exchange programmes\n• Curriculum development\n\nWant to partner with us? Let's explore how we can work together!`;
    }
    
    // Training and curriculum
    if (message.includes('training') || message.includes('curriculum') || message.includes('learn') || message.includes('teach') || message.includes('skills')) {
      const dl = lenoirKnowledge.programmes.digitalLiteracy;
      return `Our training programme covers:\n\n${dl.curriculum.map(c => `• ${c}`).join('\n')}\n\nTeaching Method: ${dl.methodology}\n\nCertification: ${dl.certification}\n\nDelivery: Both in-person and hybrid models available\nDuration: Flexible - from single sessions to multi-week programmes`;
    }
    
    // Future plans
    if (message.includes('future') || message.includes('2026') || message.includes('plans') || message.includes('next') || message.includes('expansion')) {
      return `Our 2026 roadmap includes:\n\n${lenoirKnowledge.priorities2026.map(p => `• ${p}`).join('\n')}\n\nWe're scaling our impact both in the UK and across Africa. The digital divide won't bridge itself, but together we can make it happen!`;
    }
    
    // Catch-all with helpful suggestions
    return `I'd love to help, but I didn't quite understand that question.\n\nHere's what I can tell you about:\n\n• Organization: Mission, vision, impact statistics\n• Programmes: TypeSpark Africa, UK Digital Inclusion\n• Support: Donations, volunteering, partnerships\n• Leadership: Founder James Mawaka's story\n• Operations: Global locations, contact info\n• Training: Digital literacy curriculum\n\nTry asking: "What is your mission?" or "How can I volunteer?" or "Tell me about James"`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-[#f15a24] hover:bg-[#e04f1c] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          aria-label="Open AI Assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-[#f15a24] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">LeNoir AI Assistant</h3>
                <p className="text-xs opacity-90">Powered by ElevenLabs</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    message.type === 'user'
                      ? 'bg-[#f15a24] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="whitespace-pre-line">{message.content}</div>
                  <div className={`text-xs mt-1 opacity-70 ${
                    message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about LeNoir Foundation..."
                  className="w-full p-3 pr-12 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#f15a24] focus:border-transparent text-sm max-h-20"
                  rows={1}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-[#f15a24] hover:bg-[#e04f1c] disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}