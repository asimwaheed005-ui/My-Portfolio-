const API_URL = "https://my-portfolio-production-609c.up.railway.app/api/chat";

export const sendMessage = async (conversation) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation,
      }),
    });

    // Read the response
    const data = await response.json();

    // If the backend returned an error
    if (!response.ok) {
      throw new Error(data.message || "Failed to get AI response");
    }

    // Return the AI reply
    return data.reply;
  } catch (error) {
    console.error("Chat Service Error:", error);

    // Return a friendly message instead of crashing
    return "⚠️ Sorry, I'm currently unavailable. Please try again later.";
  }
};