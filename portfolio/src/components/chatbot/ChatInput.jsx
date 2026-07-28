import { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
    >
      <input
        type="text"
        placeholder="Ask me about Asim..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 disabled:opacity-50"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;