// import installBlockquote from './Blockquote';
import installBlockquoteBlock from './Blocks/Blockquote';

const applyConfig = (config) => {
  return [installBlockquoteBlock].reduce((acc, apply) => apply(acc), config);
};

export default applyConfig;
