import React from 'react';
import config from '@plone/volto/registry';

import './styles.less';

const View = ({ data, ...rest }) => {
  const { template = 'blockquote' } = data;
  const Blockquote =
    config.blocks.blocksConfig.blockquote.templates[template].view;
  return <Blockquote data={data} {...rest} />;
};

export default View;
