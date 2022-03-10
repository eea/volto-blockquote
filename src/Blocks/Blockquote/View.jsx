import React from 'react';

import './styles.less';

const View = ({ data }) => {
  const { text, author, as: As = 'span' } = data;

  return (
    <div className="eea blockquote">
      <blockquote className="quote">
        <As>{text}</As>
        {author && <div className="meta">{author}</div>}
      </blockquote>
    </div>
  );
};

export default View;
