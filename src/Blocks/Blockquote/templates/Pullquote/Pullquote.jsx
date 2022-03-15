import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';

const Pullquote = ({ data, mode }) => {
  const { quote, source, position = 'none', reversed = false } = data;
  const edit = mode === 'edit';

  return (
    <blockquote
      className={cx('eea pullquote', !edit ? position || 'none' : 'none')}
    >
      <Icon name="quote left"></Icon>
      <div className="content">
        {!reversed ? (
          <>
            <h4 className="quote">{quote}</h4>
            {source && <p className="author">{source}</p>}
          </>
        ) : (
          <>
            {source && <p className="author">{source}</p>}
            <h4 className="quote">{quote}</h4>
          </>
        )}
      </div>
      <Icon className="quote right" name="quote right"></Icon>
    </blockquote>
  );
};

export default Pullquote;
