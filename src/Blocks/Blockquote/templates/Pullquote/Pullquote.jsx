import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';

const Pullquote = ({ data, mode }) => {
  const {
    quote,
    source,
    as: As = 'h4',
    position = 'none',
    reversed = false,
  } = data;
  const edit = mode === 'edit';

  return (
    <blockquote
      className={cx('eea pullquote', !edit ? position || 'none' : 'none')}
    >
      <Icon name="quote left"></Icon>
      <div className="content">
        {!reversed ? (
          <>
            <As className="quote">{quote}</As>
            {source && <p className="author">{source}</p>}
          </>
        ) : (
          <>
            {source && <p className="author">{source}</p>}
            <As className="quote">{quote}</As>
          </>
        )}
      </div>
      <Icon className="quote right" name="quote right"></Icon>
    </blockquote>
  );
};

export default Pullquote;
