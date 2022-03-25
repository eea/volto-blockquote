import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';
import config from '@plone/volto/registry';

const Pullquote = ({ data }) => {
  const { quote, source, metadata, position = 'none', reversed = false } = data;
  const Widget = config.blocks.blocksConfig.blockquote.widget;
  return (
    <blockquote className={cx('eea pullquote', position || 'none')}>
      <div className="content">
        {!reversed ? (
          <>
            <Pullquote.Quote>
              <Widget value={quote} />
            </Pullquote.Quote>
            <Pullquote.Author>
              <Widget value={source} />
            </Pullquote.Author>
            <Pullquote.Metadata>
              <Widget value={metadata} />
            </Pullquote.Metadata>
          </>
        ) : (
          <>
            <Pullquote.Author>
              <Widget value={source} />
            </Pullquote.Author>
            <Pullquote.Metadata>
              <Widget value={metadata} />
            </Pullquote.Metadata>
            <Pullquote.Quote>
              <Widget value={quote} />
            </Pullquote.Quote>
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
