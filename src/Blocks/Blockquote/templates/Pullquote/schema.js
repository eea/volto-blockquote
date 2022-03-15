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
      title: 'Alignment',
      widget: 'align',
    },
  },
  required: [],
};
