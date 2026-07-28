import { useEffect, useRef } from "react";
import { Bot, Trash2 } from "lucide-react";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

const ChatWindow = ({
  messages,
  loading,
  children,
  onClearChat,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  return (
    <div
      className="
        fixed
        bottom-24
        right-4
        sm:right-6
        w-[calc(100vw-2rem)]
        sm:w-[380px]
        max-w-[380px]
        h-[75vh]
        max-h-[700px]
        min-h-[500px]
        rounded-3xl
        overflow-hidden
        backdrop-blur-xl
        bg-white/90
        dark:bg-gray-900/90
        border
        border-gray-200
        dark:border-gray-700
        shadow-2xl
        flex
        flex-col
        z-50
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow">
            <Bot
              size={22}
              className="text-blue-600"
            />
          </div>

          <div>
            <h2 className="font-bold text-base sm:text-lg">
              Asim AI Assistant
            </h2>

            <p className="text-[11px] sm:text-xs opacity-90">
              Powered by Groq AI
            </p>
          </div>

        </div>

        <button
          onClick={onClearChat}
          className="hover:bg-white/20 p-2 rounded-full transition"
          title="Clear Chat"
        >
          <Trash2 size={18} />
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 p-4 sm:p-5 space-y-4">

        {messages.map((msg, index) => (
          <Message
            key={index}
            message={msg}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={messagesEndRef} />

      </div>

      {/* Footer */}

      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 sm:p-4">

        {children}

      </div>

    </div>
  );
};

export default ChatWindow;