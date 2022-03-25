import React from 'react';

export const RichTextWidget = ({ value }) =>
  value?.data ? (
    <span
      dangerouslySetInnerHTML={{
        __html: value.data,
      }}
    />
  ) : (
    value || ''
  );

export default RichTextWidget;
