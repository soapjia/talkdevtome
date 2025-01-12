import React, { useEffect } from 'react';
import duckImage from './duck.jpg';

const Chatbot = () => {
  useEffect(() => {
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
              target: document.getElementById('flat-chat'),
            },
            assistant: {
              stylesheet: "https://github.com/soapjia/talkdevtome/blob/main/chrome-extension/public/chatbot.css" //link to your self-hosted stylesheet
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

    return () => {
      const script = document.querySelector('script[src="https://cdn.voiceflow.com/widget/bundle.mjs"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div id="chatbot-container">
      <div id="flat-chat"></div>
    </div>
  );
};

export default Chatbot;