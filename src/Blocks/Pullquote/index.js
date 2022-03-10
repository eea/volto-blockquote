import quoteSVG from '@plone/volto/icons/quote.svg';
import PullquoteEdit from './Edit';
import PullquoteView from './View';

export default (config) => {
  config.blocks.blocksConfig.pullquote = {
    id: 'pullquote',
    title: 'Pullquote',
    icon: quoteSVG,
    group: 'text',
    view: PullquoteView,
    edit: PullquoteEdit,
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
