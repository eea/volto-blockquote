import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';

const Pullquote = ({ data }) => {
  const { quote, source, position = 'none', reversed = false } = data;

  return (
    <blockquote className={cx('eea pullquote', position || 'none')}>
      <div className="content">
        {!reversed ? (
          <>
            <Pullquote.Quote>{quote}</Pullquote.Quote>
            <Pullquote.Author>{source}</Pullquote.Author>
            <Pullquote.Metadata>EEA Analyst</Pullquote.Metadata>
          </>
        ) : (
          <>
            <Pullquote.Author>{source}</Pullquote.Author>
            <Pullquote.Metadata>EEA Analyst</Pullquote.Metadata>
            <Pullquote.Quote>{quote}</Pullquote.Quote>
          </>
        )}
      </div>
    </blockquote>
  );
};

Pullquote.Quote = ({ children, as: As, ...rest }) => (
  <div className="quotes wrapper">
    <Icon className="ri-double-quotes-l"></Icon>
    {As ? (
      <As className="quote" {...rest}>
        {children}
      </As>
    ) : (
      <p className="quote">{children}</p>
    )}
    <Icon className="ri-double-quotes-r"></Icon>
  </div>
);

Pullquote.Author = ({ children, ...rest }) => (
  <p className="author" {...rest}>
    {children}
  </p>
);

Pullquote.Metadata = ({ children, ...rest }) => (
  <p className="meta" {...rest}>
    {children}
  </p>
);
export default Pullquote;
