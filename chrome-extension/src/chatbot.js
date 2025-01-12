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
            verify: { projectID: '6782ca12296fa7851c525986' },  // Replace with your actual project ID
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            render: {
              mode: 'embedded',
              target: document.getElementById('flat-chat'), // Ensure this element exists
            },
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
    <div
      id="chatbot-container"
      style={{
        width: '300px', // Set container width in pixels
        height: '400px', // Set container height in pixels
        border: '1px solid #ccc', // Optional border for visibility
      }}
    >
      {/* Add target element for rendering */}
      <div
        id="flat-chat"
        style={{
          width: '300px', // Set container width in pixels
          height: '400px', // Set container height in pixels
          overflowY: 'auto', // Enable scroll if content overflows
        }}
      ></div>
    </div>
  );
};

export default Chatbot;
