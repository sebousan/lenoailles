import { heading } from '../fields/heading.js';
import { title } from '../fields/title.js';
import { text } from '../fields/text.js';
import { grid } from '../fields/grid.js';
import { background } from '../fields/background.js';

export const block_table = {
  name: 'table',
  label: 'Table',
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: false,
  summary: '{{heading.title}}',
  fields: [
    heading,
    {
      name: 'rows',
      label: 'Tableau',
      label_singular: 'ligne',
      widget: 'list',
      required: false,
      i18n: true,
      collapsed: true,
      summary: '{{title}}',
      fields: [title, text]
    },
    grid,
    background
  ]
};
