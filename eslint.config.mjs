import treesitter from 'eslint-config-treesitter';
import {globalIgnores} from 'eslint/config';

export default [
  globalIgnores([
    'bindings/',
  ]),
  ...treesitter,
];
