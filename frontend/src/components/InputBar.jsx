import { useState } from 'react';

function InputBar({ onSubmit }) {
  const [userText, setUserText] = useState('');

  const handleSubmit = () => {
    if (userText.trim()) {
      onSubmit(userText);
      setUserText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="input-bar">
      <input
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type how you're feeling..."
      />
      <button onClick={handleSubmit}>Tell Me</button>
    </div>
  );
}

export default InputBar;
