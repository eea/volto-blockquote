export default {
  title: 'Blockquote',

  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'author', 'as'],
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
  },

  required: [],
};
