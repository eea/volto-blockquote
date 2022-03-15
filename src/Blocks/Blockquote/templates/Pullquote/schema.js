export default {
  title: 'Pullquote',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['position'],
    },
  ],
  properties: {
    position: {
      title: 'Quote position',
      description: 'Takes effect only in view mode',
      widget: 'align',
    },
  },
  required: [],
};
