import config from '@plone/volto/registry';

export default (props) => {
  const schema =
    config.blocks.blocksConfig.blockquote?.templates[props.data?.template]
      ?.schema || [];
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
          'quote',
          'source',
          'reversed',
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
        title: 'Author',
        widget: 'textarea',
      },
      ...(templateSchema.properties || {}),
    },
    required: [...(templateSchema.required || [])],
  };
};
