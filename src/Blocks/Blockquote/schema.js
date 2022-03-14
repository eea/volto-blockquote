import config from '@plone/volto/registry';

export default (props) => {
  const schema =
    config.blocks.blocksConfig.blockquote.templates[props.data.template]
      .schema || [];
  const templateSchema = typeof schema === 'function' ? schema(props) : schema;
  const defaultFieldset =
    templateSchema.fieldsets?.filter(
      (fieldset) => fieldset.id === 'default',
    )[0] || {};
  return {
    title: templateSchema.title || 'Blockquote',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'template',
          'reversed',
          'quote',
          'source',
          'as',
          ...(defaultFieldset?.fields || []),
        ],
      },
      ...(templateSchema.fieldsets?.filter(
        (fieldset) => fieldset.id !== 'default',
      ) || []),
    ],
    properties: {
      template: {
        title: 'Template',
        choices: [
          ['blockquote', 'Blockquote'],
          ['pullquote', 'Pullquote'],
        ],
      },
      reversed: {
        title: 'Reversed',
        type: 'boolean',
      },
      quote: {
        title: 'Quote',
        widget: 'textarea',
      },
      source: {
        title: 'Source',
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
        title: 'Quote position',
        description: 'Takes effect only in view mode',
        choices: [
          ['left', 'Left'],
          ['right', 'Right'],
          ['none', 'None'],
        ],
      },
      ...(templateSchema.properties || {}),
    },
    required: [...(templateSchema.required || [])],
  };
};
