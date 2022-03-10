import installBlockquote from './Blockquote';
import installBlockquoteBlock from './Blocks/Blockquote';
import installPullquoteBlock from './Blocks/Pullquote';

const applyConfig = (config) => {
  return [
    installBlockquote,
    installBlockquoteBlock,
    installPullquoteBlock,
  ].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
