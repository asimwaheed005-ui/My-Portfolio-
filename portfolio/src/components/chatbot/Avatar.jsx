const Avatar = ({ sender }) => {
  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
        sender === "bot"
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-white"
      }`}
    >
      {sender === "bot" ? "🤖" : "👤"}
    </div>
  );
};

export default Avatar;