const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm shadow-md">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
          <span
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;