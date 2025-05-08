import { useState } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const predefinedResponses = {
  'how do i sell my license': 'Just upload your license, and we’ll provide a valuation within 24 hours.',
  'what license types do you accept': 'We accept Microsoft, Adobe, Autodesk, and more.',
  'how long does payment take': 'You’ll receive payment within 1–3 business days after acceptance.',
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lower = input.toLowerCase();
    const botResponse = Object.keys(predefinedResponses).find((q) =>
      lower.includes(q)
    );

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: predefinedResponses[botResponse] || "I'm not sure, but you can contact us through the form!" },
      ]);
    }, 800);

    setInput('');
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen ? (
          <div className="bg-white dark:bg-gray-800 border shadow-lg w-80 rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
              <span>SoftSell Chat</span>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>
            <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded max-w-[75%] ${
                    msg.sender === 'user'
                      ? 'bg-blue-100 dark:bg-blue-900 ml-auto'
                      : 'bg-gray-200 dark:bg-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="p-2 border-t flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 border p-2 rounded text-sm dark:bg-gray-900"
                placeholder="Ask something..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
          >
            <FaCommentDots size={20} />
          </button>
        )}
      </div>
    </>
  );
};

export default ChatWidget;
