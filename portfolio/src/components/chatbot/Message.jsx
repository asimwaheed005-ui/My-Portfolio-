import { User, Bot, Copy, Check } from "lucide-react";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


const Message = ({ message }) => {

  const isBot = message.sender === "bot";

  const [copied, setCopied] = useState(false);


  const copyMessage = async () => {

    await navigator.clipboard.writeText(message.text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);

  };


  return (

    <div
      className={`flex gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >


      {isBot && (

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">

          <Bot size={20}/>

        </div>

      )}



      <div className="max-w-[78%]">


        <div
          className={`rounded-2xl px-4 py-3 shadow-md break-words ${
            isBot
              ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-sm"
              : "bg-blue-600 text-white rounded-tr-sm"
          }`}
        >


          <ReactMarkdown

            remarkPlugins={[remarkGfm]}

            components={{

              code({inline, className, children, ...props}) {

                const match = /language-(\w+)/.exec(
                  className || ""
                );


                return !inline && match ? (

                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >

                    {String(children).replace(/\n$/, "")}

                  </SyntaxHighlighter>


                ) : (

                  <code
                    className={className}
                    {...props}
                  >

                    {children}

                  </code>

                );

              },

            }}

          >

            {message.text}

          </ReactMarkdown>


        </div>



        <div
          className={`flex items-center mt-2 gap-2 ${
            isBot ? "justify-start" : "justify-end"
          }`}
        >

          <span className="text-xs text-gray-500">

            {new Date().toLocaleTimeString([], {
              hour:"2-digit",
              minute:"2-digit",
            })}

          </span>



          {isBot && (

            <button
              onClick={copyMessage}
              className="hover:text-blue-600 transition"
            >

              {copied ? (
                <Check size={15}/>
              ) : (
                <Copy size={15}/>
              )}

            </button>

          )}


        </div>


      </div>



      {!isBot && (

        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white flex-shrink-0">

          <User size={18}/>

        </div>

      )}


    </div>

  );

};


export default Message;