import React from 'react';

const Blockquote = ({ data, mode }) => {
  const { quote, source, as: As = 'span', reversed = false } = data;
  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        {mode === 'edit' && !quote && <p>Please add quote</p>}
        {reversed ? (
          <>
            <As>{quote}</As>
            {source && <div className="meta">{source}</div>}
          </>
        ) : (
          <>
            {source && <div className="meta">{source}</div>}
            <As>{quote}</As>
          </>
        )}
      </blockquote>
    </div>
  );
};

export default Blockquote;
