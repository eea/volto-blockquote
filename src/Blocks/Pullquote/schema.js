export default {
  title: 'Pullquote',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'author', 'as', 'position'],
    },
  ],

  properties: {
    text: {
      title: 'Text',
      widget: 'textarea',
    },
    author: {
      title: 'Text',
      widget: 'textarea',
    },
    as: {
      title: 'HTML',
      choices: [
        ['p', 'Paragraph'],
        ['h2', 'Header 2'],
        ['h4', 'Header 4'],
      ],
    },
    position: {
      title: 'Position',
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
