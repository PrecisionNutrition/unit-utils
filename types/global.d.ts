// Types for compiled templates
declare module '@precision-nutrition/unit-utils/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
