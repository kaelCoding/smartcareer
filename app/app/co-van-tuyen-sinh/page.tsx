'use client'

import { useChat } from '@ai-sdk/react';
import { Bot, Send, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useEffect, useRef, useState } from 'react';

export default function CoVanTuyenSinhPage() {
  const [messages, setMessages] = useState<{id: string, role: string, content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;
    
    const textToSend = input;
    setInput('');
    
    const userMsg = { id: Date.now().toString(), role: 'user', content: textToSend };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error('Lỗi kết nối đến máy chủ');
      }

      const reader = response.body?.getReader();
      if (!reader) return;

      const aiMsgId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: aiMsgId, role: 'assistant', content: '' }]);

      const decoder = new TextDecoder('utf-8');
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunkText = decoder.decode(value, { stream: true });
        setMessages(prev => prev.map(m => m.id === aiMsgId ? { ...m, content: m.content + chunkText } : m));
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'assistant', content: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden my-4 md:my-8">
      {/* Header */}
      <div className="bg-blue-600 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Bot className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">Cố vấn Tuyển sinh AI</h1>
          <p className="text-blue-100 text-sm">Luôn sẵn sàng giải đáp thắc mắc của bạn</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-gray-50">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Xin chào! Mình có thể giúp gì cho bạn?</h2>
            <p className="text-gray-500 max-w-md">
              Hãy hỏi mình bất kỳ câu hỏi nào về chọn trường, chọn ngành, phương thức xét tuyển hay thông tin học phí nhé.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-lg mt-6">
              {[
                "Nên học IT ở trường nào tại Đà Nẵng?",
                "Sự khác nhau giữa Khoa học máy tính và Kỹ thuật phần mềm?",
                "Khối A00 có thể xét tuyển những ngành nào?",
                "Điểm chuẩn khối D01 năm ngoái khoảng bao nhiêu?"
              ].map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => setInput(q)}
                  className="bg-white p-3 rounded-lg border border-gray-200 text-sm text-left text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map(m => (
            <div key={m.id} className={`flex gap-3 md:gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-4 ${
                m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-sm' 
                  : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
              }`}>
                {m.role === 'user' ? (
                  <p className="whitespace-pre-wrap">
                    {m.content || (m.parts?.map((part: any) => part.type === 'text' ? part.text : '').join(''))}
                  </p>
                ) : (
                  <div className="text-sm md:text-base text-gray-800">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mb-3 mt-4" {...props} />,
                        h3: ({node, ...props}) => <h3 className="text-lg font-bold mb-2 mt-3" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 leading-relaxed" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-1" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-1" {...props} />,
                        li: ({node, ...props}) => <li className="" {...props} />,
                        a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                        code: ({node, ...props}) => <code className="bg-gray-100 text-blue-600 rounded px-1 py-0.5 text-sm font-mono" {...props} />,
                      }}
                    >
                      {m.content || (m.parts?.map((part: any) => part.type === 'text' ? part.text : '').join(''))}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
        
        {isLoading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex gap-3 md:gap-4 justify-start">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
              <span className="text-sm text-gray-500 font-medium">Đang suy nghĩ...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form onSubmit={handleSubmit} className="relative flex items-center max-w-4xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập câu hỏi của bạn..."
            className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <p className="text-center text-xs text-gray-400 mt-3">
          AI có thể đưa ra thông tin chưa chính xác. Hãy luôn đối chiếu với thông tin từ các trường đại học.
        </p>
      </div>
    </div>
  );
}
