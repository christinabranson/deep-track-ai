import { web } from 'projen';
import { TypeScriptJsxMode } from 'projen/lib/javascript';
const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'deep-track-ai',
  projenrcTs: true,

  deps: [
    'gray-matter',
    'remark',
    'remark-html',
    'tailwindcss',
    'preline',
    'postcss',
    'autoprefixer',
    'react-markdown',
  ] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: 'deep-track-ai' /* The "name" in package.json. */,
  tailwind: false /* Setup Tailwind CSS as a PostCSS plugin. */,
  eslint: true,
  tsconfig: {
    compilerOptions: {
      jsx: TypeScriptJsxMode.REACT_JSX,
      esModuleInterop: true,
      alwaysStrict: true,
      declaration: true,
      experimentalDecorators: true,
      inlineSourceMap: true,
      inlineSources: true,
      lib: ['es2018', 'DOM', 'DOM.Iterable'],
      module: 'CommonJS',
      noEmitOnError: false,
      noFallthroughCasesInSwitch: true,
      noImplicitAny: true,
      noImplicitReturns: true,
      noImplicitThis: true,
      noUnusedLocals: true,
      noUnusedParameters: true,
      resolveJsonModule: true,
      strict: true,
      strictNullChecks: true,
      strictPropertyInitialization: true,
      stripInternal: true,
      target: 'ES2018',
    },
  },
});

project.addTask('clean-npm', {
  exec: 'npm cache clean --force',
});

project.synth();
