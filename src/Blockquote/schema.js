export default (data) => {
  return {
    title: 'Blockquote',
    fieldsets: [
      {
        id: 'default',
        title: 'Properties',
        fields: ['type'],
      },
      ...(data.type === 'pullquote'
        ? [
            {
              id: 'pullquote',
              title: 'Pullquote properties',
              fields: ['position', 'author', 'author_position'],
            },
          ]
        : []),
    ],
    properties: {
      type: {
        title: 'Type',
        choices: [
          ['blockquote', 'Blockquote'],
          ['pullquote', 'Pullquote'],
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
      author: {
        title: 'Author',
      },
      author_position: {
        title: 'Author position',
        choices: [
          ['left', 'Left'],
          ['right', 'Right'],
          ['center', 'Center'],
        ],
      },
    },
    required: [],
  };
};
