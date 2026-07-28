const API_URL =
  "https://my-portfolio-production-609c.up.railway.app/api/chat";

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


    const data = await response.json();


    console.log("Backend Response:", data);


    if (!response.ok) {
      throw new Error(
        data.message || "Backend error"
      );
    }


    return data.reply;


  } catch (error) {

    console.error(
      "Chat Error:",
      error.message
    );


    return `ERROR: ${error.message}`;
  }
};