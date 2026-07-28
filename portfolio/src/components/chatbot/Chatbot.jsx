import { useState, useEffect } from "react";

import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

import { sendMessage } from "../services/chatService";


const Chatbot = () => {


  const [isOpen, setIsOpen] = useState(false);


  const [messages, setMessages] = useState(() => {

    const saved =
      localStorage.getItem("portfolio-chat");


    return saved
      ? JSON.parse(saved)
      : [
          {
            sender:"bot",
            text:"Hi 👋 I'm Asim's AI Assistant. Ask me anything about Asim.",
          },
        ];

  });



  const [loading,setLoading] = useState(false);



  // Save messages

  useEffect(()=>{

    localStorage.setItem(
      "portfolio-chat",
      JSON.stringify(messages)
    );

  },[messages]);





  const clearChat = ()=>{


    const initial = [

      {
        sender:"bot",
        text:"Hi 👋 I'm Asim's AI Assistant. Ask me anything about Asim.",
      },

    ];


    setMessages(initial);


    localStorage.removeItem(
      "portfolio-chat"
    );

  };






  const handleSend = async(message)=>{


    if(!message.trim() || loading)
      return;



    const userMessage = {

      sender:"user",
      text:message,

    };



    setMessages(prev=>[
      ...prev,
      userMessage
    ]);



    setLoading(true);



    try{


      const conversation =
      [
        ...messages,
        userMessage

      ].map((msg)=>({

        role:
        msg.sender==="bot"
        ? "assistant"
        : "user",


        content:msg.text,

      }));





      const reply =
      await sendMessage(conversation);





      setMessages(prev=>[

        ...prev,

        {
          sender:"bot",
          text:reply,
        }

      ]);



    }

    catch(error){


      console.error(
        error
      );


      setMessages(prev=>[

        ...prev,

        {

          sender:"bot",

          text:
          "⚠️ Sorry, something went wrong. Please try again.",

        }

      ]);

    }



    finally{

      setLoading(false);

    }


  };







return (

<>


<button

onClick={()=>setIsOpen(!isOpen)}

className="
fixed bottom-6 right-6
w-16 h-16
rounded-full
bg-blue-600
text-white
text-3xl
shadow-lg
hover:scale-110
transition
z-50
"

>

💬

</button>





{

isOpen &&

<ChatWindow

messages={messages}

loading={loading}

onClearChat={clearChat}

>


<ChatInput

onSend={handleSend}

loading={loading}

/>


</ChatWindow>


}


</>


);


};


export default Chatbot;