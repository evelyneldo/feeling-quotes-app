function QuoteDisplay({ quote }) {
    return (
      <div className="quote-box">
        <p className="quote-soft-text">“{quote.text}”</p>
        <p className="quote-soft-author">— {quote.author || 'Someone who understands'}</p>
      </div>
    );
  }
  
  export default QuoteDisplay;
  