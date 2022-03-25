import React from 'react';
import config from '@plone/volto/registry';

const Blockquote = ({ data, mode }) => {
  const { quote, source, reversed = false } = data;
  const Widget = config.blocks.blocksConfig.blockquote.widget;
  const text = quote.data || quote;
  const author = source.data || source;

  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        {mode === 'edit' && !text && <p>Please add quote</p>}
        {!reversed ? (
          <>
            <Widget value={quote} />
            {author && (
              <div className="meta">
                <Widget value={source} />
              </div>
            )}
          </>
        ) : (
          <>
            {author && (
              <div className="meta">
                <Widget value={source} />
              </div>
            )}
            <Widget value={quote} />
          </>
        )}
      </blockquote>
    </div>
  );
};

export default Blockquote;
