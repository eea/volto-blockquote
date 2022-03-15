import React from 'react';

const Blockquote = ({ data, mode }) => {
  const { quote, source, reversed = false } = data;
  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        {mode === 'edit' && !quote && <p>Please add quote</p>}
        {!reversed ? (
          <>
            <span>{quote}</span>
            {source && <div className="meta">{source}</div>}
          </>
        ) : (
          <>
            {source && <div className="meta">{source}</div>}
            <span>{quote}</span>
          </>
        )}
      </blockquote>
    </div>
  );
};

export default Blockquote;
