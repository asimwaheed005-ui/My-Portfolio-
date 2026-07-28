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
        className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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