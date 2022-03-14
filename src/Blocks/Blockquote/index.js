import quoteSVG from '@plone/volto/icons/quote.svg';
import BlockquoteEdit from './Edit';
import BlockquoteView from './View';

import BlockquoteTemplate from './templates/Blockquote/Blockquote';
import PullquoteTemplate from './templates/Pullquote/Pullquote';

import pullquoteSchema from './templates/Pullquote/schema';

export default (config) => {
  config.blocks.blocksConfig.blockquote = {
    id: 'blockquote',
    title: 'Blockquote',
    icon: quoteSVG,
    group: 'text',
    view: BlockquoteView,
    edit: BlockquoteEdit,
    templates: {
      blockquote: {
        view: BlockquoteTemplate,
      },
      pullquote: {
        view: PullquoteTemplate,
        schema: pullquoteSchema,
      },
    },
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};
