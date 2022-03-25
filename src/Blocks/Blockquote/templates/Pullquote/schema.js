export default {
  title: 'Pullquote',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['position', 'metadata'],
    },
  ],
  properties: {
    position: {
      title: 'Alignment',
      widget: 'align',
    },
    metadata: {
      title: 'Author title',
      widget: 'textarea',
    },
  },
  required: [],
};
