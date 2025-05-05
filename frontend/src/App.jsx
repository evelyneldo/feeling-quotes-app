import { useState } from 'react';
import InputBar from './components/InputBar';
import QuoteDisplay from './components/QuoteDisplay';
import { getRandomQuote } from './api/quoteFetcher';

function App() {
  const [currentQuote, setCurrentQuote] = useState(null);

  const handleFeelingSubmit = async (userInput) => {
    const quoteData = await getRandomQuote(userInput);
    setCurrentQuote(quoteData);
  };

  return (
    <div className="container">
      <h2>Hey, you’re here... 🤗</h2>
      <p className="intro-text">
        I’ve been waiting to talk to you.<br />
        How are you feeling today?
      </p>
      <InputBar onSubmit={handleFeelingSubmit} />
      {currentQuote && <QuoteDisplay quote={currentQuote} />}
    </div>
  );
}

export default App;
