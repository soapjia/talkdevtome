import React, { useEffect } from 'react';
import duckImage from './duck.jpg';

const Chatbot = () => {
  useEffect(() => {
    // Function to dynamically load the Voiceflow chatbot script
    const loadChatbotScript = () => {
      const script = document.createElement('script');
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "text/javascript";
      script.onload = () => {
        if (window.voiceflow?.chat) {
          window.voiceflow.chat.load({
            verify: { projectID: '6782ca12296fa7851c525986' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            render: {
              mode: 'embedded',
              target: document.getElementById('flat-chat'), // Ensure this element exists
            },
            assistant: {
              //title: "Speak your Dev!",
              //description: "How can I help you today?",
              //image: duckImage,
              // color: "#dafefe",
              stylesheet: "/chatbot.css" //link to your self-hosted stylesheet
            },
            autostart: true,
          });
        } else {
          console.error('Voiceflow chat object is not available.');
        }
      };

      script.onerror = () => {
        console.error('Failed to load Voiceflow chatbot script.');
      };

      document.body.appendChild(script);
    };

    loadChatbotScript();

    // Clean up the script when the component is unmounted
    return () => {
      const script = document.querySelector('script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]');
      if (script) {
        script.remove();
      }
    };
  }, []); // Empty array ensures this only runs once when the component mounts

  return (
    <div id="chatbot-container">
      {/* Add target element for rendering */}
      <div id="flat-chat"></div>
    </div>
  );
};

export default Chatbot;