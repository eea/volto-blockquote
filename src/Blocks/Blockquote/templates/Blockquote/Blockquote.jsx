import React from 'react';

const Blockquote = ({ data }) => {
  const { quote, source, as: As = 'span', reversed = false } = data;

  return (
    <div className="eea blockquote">
      <blockquote className="quote">
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
