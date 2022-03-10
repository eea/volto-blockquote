import quoteSVG from '@plone/volto/icons/quote.svg';
import BlockquoteEdit from './Edit';
import BlockquoteView from './View';

export default (config) => {
  config.blocks.blocksConfig.blockquote = {
    id: 'blockquote',
    title: 'Blockquote',
    icon: quoteSVG,
    group: 'text',
    view: BlockquoteView,
    edit: BlockquoteEdit,
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
