/**
 * INTEGRATION EXAMPLE
 *
 * This file shows how to integrate the Chatbot component into your app.
 * Copy the import and <Chatbot /> line to your actual App.jsx
 */

// STEP 1: Import the Chatbot component
import Chatbot from './src/components/chatbot/Chatbot';

// Your existing imports
import { useState } from 'react';
import './App.css';

function App() {
  // Your existing state and logic
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Your existing app content */}
      <header className="App-header">
        <h1>AIB Security Services</h1>
        <p>Professional security solutions for your business</p>
      </header>

      <main>
        {/* Your existing pages/components */}
        <section id="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {/* Your service cards */}
          </div>
        </section>

        <section id="about">
          <h2>About Us</h2>
          {/* Your content */}
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          {/* Your contact form or info */}
        </section>
      </main>

      <footer>
        {/* Your footer */}
      </footer>

      {/* STEP 2: Add the Chatbot component (anywhere in your JSX) */}
      <Chatbot />
      {/* That's it! The chatbot will appear as a floating button */}
    </div>
  );
}

export default App;

/**
 * NOTES:
 *
 * 1. The Chatbot is self-contained - no props needed
 * 2. It manages its own state via localStorage
 * 3. It's absolutely positioned, so it won't affect your layout
 * 4. On mobile, it shows full-screen when opened
 * 5. On desktop, it shows as a 420x680px window in bottom-right
 *
 * CUSTOMIZATION:
 *
 * - Change questions: Edit src/data/conversationFlow.js
 * - Change colors: Update Tailwind classes in components
 * - Change bot name: Edit src/components/chatbot/ui/ChatHeader.jsx
 * - Add cities: Edit src/data/locationData.js
 *
 * ANALYTICS:
 *
 * If you have Google Analytics:
 * 1. Add GA script to public/index.html
 * 2. Events will auto-track (chatbot_opened, question_answered, etc.)
 *
 * BACKEND:
 *
 * When ready to send data to backend:
 * 1. Create API endpoint: POST /api/submit-enquiry
 * 2. Update useChatbot.js handleSubmitContact to fetch()
 * 3. See INTEGRATION_GUIDE.md for details
 */
