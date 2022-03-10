import React from 'react';
import cx from 'classnames';
import { Icon } from 'semantic-ui-react';

const View = ({ data, mode }) => {
  const { text, author, as: As = 'h4', position = 'none' } = data;
  const edit = mode === 'edit';

  // if (!text && mode === 'edit') return <p>Add statistic items</p>;
  return (
    <blockquote
      className={cx('eea pullquote', !edit ? position || 'none' : 'none')}
    >
      <Icon name="quote left"></Icon>
      <div className="content">
        <As className="quote">{text}</As>
        {author && <p className="author">{author}</p>}
      </div>
      <Icon className="quote right" name="quote right"></Icon>
    </blockquote>
  );
};

export default View;
