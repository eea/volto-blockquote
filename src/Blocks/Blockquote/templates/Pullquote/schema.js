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
      choices: [
        ['left', 'Left'],
        ['right', 'Right'],
        ['none', 'None'],
      ],
    },
  },
  required: [],
};
